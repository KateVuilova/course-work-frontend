import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DocumentationForm from '../DocumentationForm';
import TextInput from '../TextInput';

export default class HRDocumentationForm extends Component {
  render() {
    return (
      <DocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Department'
          type='text'
          name='Department'
        />
        {this.props.children}
      </DocumentationForm>
    );
  }
}
