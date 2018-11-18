import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';

export default class AccountantForm extends Component {
  render() {
    return (
      <WorkerForm>
        <TextInput
          errorText='Error'
          placeholder='Field'
          type='text'
          name='Field'
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}
