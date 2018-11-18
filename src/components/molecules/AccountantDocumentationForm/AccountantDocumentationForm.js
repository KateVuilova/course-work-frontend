import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DocumentationForm from '../DocumentationForm';
import TextInput from '../TextInput';

export default class AccountantDocumentationForm extends Component {
  render() {
    return (
      <DocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Bank'
          type='text'
          name='Bank'
        />
        {this.props.children}
      </DocumentationForm>
    );
  }
}
