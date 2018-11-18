import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectForm from '../ObjectForm';
import TextInput from '../TextInput';

export default class DocumentationForm extends Component {
  render() {
    return (
      <ObjectForm>
        <TextInput
          errorText='Error'
          placeholder='Responsible person'
          type='text'
          name='Responsible person'
        />
        <TextInput
          errorText='Error'
          placeholder='Date'
          type='text'
          name='Date'
        />
		<TextInput
          errorText='Error'
          placeholder='Signature'
          type='text'
          name='Signature'
        />
        {this.props.children}
      </ObjectForm>
    );
  }
}
