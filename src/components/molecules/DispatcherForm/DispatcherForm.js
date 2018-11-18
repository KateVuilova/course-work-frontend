import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';

export default class DispatcherForm extends Component {
  render() {
    return (
      <WorkerForm>
        <TextInput
          errorText='Error'
          placeholder='Manager'
          type='text'
          name='Manager'
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}
