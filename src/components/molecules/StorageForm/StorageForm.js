import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MaterialForm from '../MaterialForm';
import TextInput from '../TextInput';

export default class StorageForm extends Component {
  render() {
    return (
      <MaterialForm>
        <TextInput
          errorText='Error'
          placeholder='Client'
          type='text'
          name='Client'
        />
		<TextInput
          errorText='Error'
          placeholder='Address'
          type='text'
          name='Address'
        />
        {this.props.children}
      </MaterialForm>
    );
  }
}
