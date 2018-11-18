import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccountantDocumentationForm from '../AccountantDocumentationForm';
import TextInput from '../TextInput';

export default class CheckForm extends Component {
  render() {
    return (
      <AccountantDocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Client'
          type='text'
          name='Client'
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
