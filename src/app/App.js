import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BoxShadow from '../components/atoms/BoxShadow';
import SignInForm from '../containers/SignInForm';
import ItemList from '../components/molecules/ItemList';
import Navigation from '../components/molecules/Navigation';
import CreateView from '../components/organisms/CreateView';
import { userInfo } from '../redux/reducers';
import { list } from './types';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getMainList();
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/signin' && this.props.signedIn) {
      this.props.history.push('/home');
      this.props.getMainList();
    }
  }

  render() {
    return (
      <BrowserRouter forceRefresh>
        <div className='App'>
          <Switch>
            <Route path='/signin'>
              {this.props.signedIn ? (
                <Redirect to='/home' />
              ) : (
                <div className='Signin-app'>
                  <BoxShadow>
                    <SignInForm
                      header='Welcome to ITransports!'
                      paragraph='You need to sign in to continue'
                      buttonLabel='Sign in'
                      errorMessage='The email or password is not valid'
                      emailPlaceholder='Email'
                      emailValidationMessage='Email invalid'
                      passwordPlaceholder='Password'
                      passwordValidationMessage='Password invalid'
                    />
                  </BoxShadow>
                </div>
              )}
            </Route>
            <Route
              path='/home'
              render={() => (
                <Fragment>
                  <Navigation />
                  <ItemList list={this.props.list} />
                </Fragment>
              )}
            />
            <Route
              path='/create'
              render={() => (
                <Fragment>
                  <Navigation />
                  <CreateView list={list} />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ userInfo: { signedIn, list } }) => ({
  signedIn,
  list,
});

const mapDispatchToProps = dispatch => ({
  getMainList: () => dispatch(userInfo.getList()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
