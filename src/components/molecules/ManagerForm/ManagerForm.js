import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';
import { userInfo } from '../../../redux/reducers';

class ManagerForm extends Component {
  state = {
    directionId: 0,
    status: '',
    salary: 0,
    name: '',
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    id: 0,
  };

  componentDidMount() {
    if (this.props.mode === 'edit') {
      this.props.getManager(this.props.item.id);
    }
  }

  componentDidUpdate() {
    if (!this.state.status && this.props.currentItem) {
      this.setState({
        directionId: this.props.currentItem.directionId,
        status: this.props.currentItem.status,
        salary: this.props.currentItem.salary,
        name: this.props.currentItem.name,
        firstname: this.props.currentItem.firstname,
        lastname: this.props.currentItem.lastname,
        age: this.props.currentItem.age,
        gender: this.props.currentItem.gender,
        id: this.props.currentItem.id,
      });
    }
  }

  render() {
    return (
      <WorkerForm
        item={this.props.currentItem}
        mode={this.props.mode}
        onFirstNameChange={this.handleFirstNameChange}
        onLastNameChange={this.handleLastNameChange}
        onAgeChange={this.handleAgeChange}
        onGenderChange={this.handleGenderChange}
        onNameChange={this.handleNameChange}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        age={this.state.age}
        gender={this.state.gender}
        name={this.state.name}
      >
        <TextInput
          errorText='Error'
          placeholder='Direction'
          type='text'
          name='directionId'
          value={this.props.currentItem ? this.props.currentItem.directionId : undefined}
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}

const mapStateToProps = ({ userInfo: { currentItem } }) => ({
  currentItem,
});

const mapDispatchToProps = dispatch => ({
  getManager: id => dispatch(userInfo.getManager(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManagerForm);
