import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';

export default class MasterForm extends Component {
  render() {
    return (
      <WorkerForm>
        <TextInput
          errorText='Error'
          placeholder='Specialization'
          type='text'
          name='Specialization'
        />
		<TextInput
          errorText='Error'
          placeholder='Repair'
          type='text'
          name='Repair'
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}
