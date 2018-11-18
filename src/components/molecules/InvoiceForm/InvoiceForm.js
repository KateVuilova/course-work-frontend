import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccountantDocumentationForm from '../AccountantDocumentationForm';
import TextInput from '../TextInput';

export default class InvoiceForm extends Component {
  render() {
    return (
      <AccountantDocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Worker'
          type='text'
          name='Worker'
        />
		<TextInput
          errorText='Error'
          placeholder='Amount'
          type='text'
          name='Amount'
        />
        {this.props.children}
      </AccountantDocumentationForm>
    );
  }
}
