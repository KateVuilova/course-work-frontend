import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DocumentationForm from '../DocumentationForm';
import TextInput from '../TextInput';

export default class ClientDocumentationForm extends Component {
  render() {
    return (
      <DocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Client'
          type='text'
          name='Client'
        />
        <TextInput
          errorText='Error'
          placeholder='Copies'
          type='text'
          name='Copies'
        />
        {this.props.children}
      </DocumentationForm>
    );
  }
}
