import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WorkerForm from '../WorkerForm';
import TextInput from '../TextInput';

export default class HRForm extends Component {
  render() {
    return (
      <WorkerForm>
        <TextInput
          errorText='Error'
          placeholder='Department'
          type='text'
          name='Department'
        />
        {this.props.children}
      </WorkerForm>
    );
  }
}
