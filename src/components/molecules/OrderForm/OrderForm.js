import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';

export default class OrderForm extends Component {
  render() {
    return (
      <Form>
        <TextInput
          errorText='Error'
          placeholder='Client'
          type='text'
          name='Client'
        />
		<TextInput
          errorText='Error'
          placeholder='Weight'
          type='text'
          name='Weight'
        />
		<TextInput
          errorText='Error'
          placeholder='Price'
          type='text'
          name='Price'
        />
		<TextInput
          errorText='Error'
          placeholder='Path'
          type='text'
          name='Path'
        />
		<TextInput
          errorText='Error'
          placeholder='Sender storage'
          type='text'
          name='Sender storage'
        />
		<TextInput
          errorText='Error'
          placeholder='Recipient storage'
          type='text'
          name='Recipient storage'
        />
		<TextInput
          errorText='Error'
          placeholder='End date'
          type='text'
          name='End date'
        />
      </Form>
    );
  }
}
