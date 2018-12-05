import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectForm from '../ObjectForm';
import TextInput from '../TextInput';
import Form from '../Form';

export default class HumanForm extends Component {
  render() {
    return (
      <ObjectForm
        onSubmit={this.props.onSubmit}
        item={this.props.item}
        mode={this.props.mode}
        name={this.props.name}
        onNameChange={this.props.onNameChange}
      >
        <Form.TextInput
          errorText='Error'
          placeholder='Firstname'
          type='text'
          name='firstname'
          value={this.props.mode === 'edit' ? this.props.firstname : undefined}
          onChange={this.props.onFirstNameChange}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Lastname'
          type='text'
          name='lastname'
          value={this.props.mode === 'edit' ? this.props.lastname : undefined}
          onChange={this.props.onLastNameChange}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Age'
          type='text'
          name='age'
          value={this.props.mode === 'edit' ? this.props.age : undefined}
          onChange={this.props.onAgeChange}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Gender'
          type='text'
          name='gender'
          value={this.props.mode === 'edit' ? this.props.gender : undefined}
          onChange={this.props.onGenderChange}
        />
        {this.props.children}
      </ObjectForm>
    );
  }
}
