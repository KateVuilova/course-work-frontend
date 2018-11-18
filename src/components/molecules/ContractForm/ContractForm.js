import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ClientDocumentationForm from '../ClientDocumentationForm';
import TextInput from '../TextInput';

export default class ContractForm extends Component {
  render() {
    return (
      <ClientDocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Signing date'
          type='text'
          name='Signing date'
        />
        {this.props.children}
      </ClientDocumentationForm>
    );
  }
}
