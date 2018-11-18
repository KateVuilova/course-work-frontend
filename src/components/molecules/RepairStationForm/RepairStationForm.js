import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MaterialForm from '../MaterialForm';
import TextInput from '../TextInput';

export default class RepairStationForm extends Component {
  render() {
    return (
      <MaterialForm>
        <TextInput
          errorText='Error'
          placeholder='Free places'
          type='text'
          name='Free places'
        />
        {this.props.children}
      </MaterialForm>
    );
  }
}
