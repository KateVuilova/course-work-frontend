import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HumanForm from '../HumanForm';
import TextInput from '../TextInput';

export default class ClientForm extends Component {
  render() {
    return (
      <HumanForm>
        <TextInput
          errorText='Error'
          placeholder='Contract'
          type='text'
          name='Contract'
        />
        <TextInput
          errorText='Error'
          placeholder='Address'
          type='text'
          name='Address'
        />
        {this.props.children}
      </HumanForm>
    );
  }
}
