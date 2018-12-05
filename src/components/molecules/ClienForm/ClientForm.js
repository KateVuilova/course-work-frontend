import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HumanForm from '../HumanForm';
import TextInput from '../TextInput';
import { userInfo } from '../../../redux/reducers';
import Form from '../Form';

class ClientForm extends Component {
  state = {
    agreement: '',
    address: '',
    name: '',
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    id: 0,
  };

  componentDidMount() {
    if (this.props.mode === 'edit') {
      this.props.getClient(this.props.item.id);
    }
  }

  componentDidUpdate() {
    if (!this.state.agreement && this.props.currentItem) {
      this.setState({
        agreement: this.props.currentItem.agreement,
        address: this.props.currentItem.address,
        name: this.props.currentItem.name,
        firstname: this.props.currentItem.firstname,
        lastname: this.props.currentItem.lastname,
        age: this.props.currentItem.age,
        gender: this.props.currentItem.gender,
        id: this.props.currentItem.id,
      });
    }
  }

  handleSubmit = data => {
    if (this.props.mode === 'create') {
      this.props.onCreate(data);
    }
    if (this.props.mode === 'edit') {
      this.props.onEdit(this.state);
    }
    this.props.onSubmit();
  };

  handleNameChange = ({ currentTarget }) => {
    this.setState({ name: currentTarget.value });
  }

  handleFirstNameChange = ({ currentTarget }) => {
    this.setState({ firstname: currentTarget.value });
  };

  handleLastNameChange = ({ currentTarget }) => {
    this.setState({ lastname: currentTarget.value });
  };

  handleAgeChange = ({ currentTarget }) => {
    this.setState({ age: currentTarget.value });
  };

  handleGenderChange = ({ currentTarget }) => {
    this.setState({ gender: currentTarget.value });
  };

  handleContractChange = ({ currentTarget }) => {
    this.setState({ agreement: currentTarget.value });
  };

  handleAddressChange = ({ currentTarget }) => {
    this.setState({ address: currentTarget.value });
  };
  render() {
    return (
      <HumanForm
        onSubmit={this.handleSubmit}
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
        <Form.TextInput
          errorText='Error'
          placeholder='Contract'
          type='text'
          name='agreement'
          value={
            this.props.mode === 'edit' && this.props.currentItem
              ? this.state.agreement
              : undefined
          }
          onChange={this.handleContractChange}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Address'
          type='text'
          name='address'
          value={
            this.props.mode === 'edit' && this.props.currentItem
              ? this.state.address
              : undefined
          }
          onChange={this.handleAddressChange}
        />
        {this.props.children}
      </HumanForm>
    );
  }
}

const mapStateToProps = ({ userInfo: { currentItem } }) => ({
  currentItem,
});

const mapDispatchToProps = dispatch => ({
  onCreate: data => dispatch(userInfo.createClient(data)),
  getClient: id => dispatch(userInfo.getClient(id)),
  onEdit: data => dispatch(userInfo.updateClient(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientForm);
