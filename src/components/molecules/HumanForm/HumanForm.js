import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectForm from '../ObjectForm';
import TextInput from '../TextInput';
import Form from '../Form';

export default class HumanForm extends Component {
  render() {
    return (
      <ObjectForm onSubmit={this.props.onSubmit} item={this.props.item} mode={this.props.mode}>
        <Form.TextInput
          errorText='Error'
          placeholder='Firstname'
          type='text'
          name='firstname'
          value={this.props.mode === 'edit' && this.props.item ? this.props.item.firstname : undefined}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Lastname'
          type='text'
          name='lastname'
          value={this.props.mode === 'edit' && this.props.item ? this.props.item.lastname : undefined}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Age'
          type='text'
          name='age'
          value={this.props.mode === 'edit' && this.props.item ? this.props.item.age : undefined}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Gender'
          type='text'
          name='gender'
          value={this.props.mode === 'edit' && this.props.item ? this.props.item.gender : undefined}
        />
        {this.props.children}
      </ObjectForm>
    );
  }
}
