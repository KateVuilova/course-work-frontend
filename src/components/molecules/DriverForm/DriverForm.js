import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';

export default class DriverForm extends Component {
  render() {
    return (
      <WorkerForm>
        <TextInput
          errorText='Error'
          placeholder='Car'
          type='text'
          name='Car'
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}
