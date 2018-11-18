import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HRDocumentationForm from '../HRDocumentationForm';
import TextInput from '../TextInput';

export default class AppointmentForm extends Component {
  render() {
    return (
      <HRDocumentationForm>
        <TextInput
          errorText='Error'
          placeholder='Signing date'
          type='text'
          name='Signing date'
        />
        {this.props.children}
      </HRDocumentationForm>
    );
  }
}
