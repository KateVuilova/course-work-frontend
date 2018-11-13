import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HumanForm from '../HumanForm';
import TextInput from '../TextInput';

export default class WorkerForm extends Component {
  render() {
    return (
      <HumanForm>
        <TextInput
          errorText='Error'
          placeholder='Salary'
          type='text'
          name='Salary'
        />
        <TextInput
          errorText='Error'
          placeholder='Status'
          type='text'
          name='Status'
        />
        {this.props.children}
      </HumanForm>
    );
  }
}
