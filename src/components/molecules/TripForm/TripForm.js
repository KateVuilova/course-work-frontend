import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';

export default class TripForm extends Component {
  render() {
    return (
      <Form>
        <TextInput
          errorText='Error'
          placeholder='Manager'
          type='text'
          name='Manager'
        />
		<TextInput
          errorText='Error'
          placeholder='Dispatcher'
          type='text'
          name='Dispatcher'
        />
		<TextInput
          errorText='Error'
          placeholder='Driver'
          type='text'
          name='Driver'
        />
		<TextInput
          errorText='Error'
          placeholder='Car'
          type='text'
          name='Car'
        />
      </Form>
    );
  }
}
