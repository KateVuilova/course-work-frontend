import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectForm from '../ObjectForm';
import TextInput from '../TextInput';

export default class HumanForm extends Component {
  render() {
    return (
      <ObjectForm>
        <TextInput
          errorText='Error'
          placeholder='Surname'
          type='text'
          name='Surname'
        />
        <TextInput
          errorText='Error'
          placeholder='Age'
          type='text'
          name='Age'
        />
        <TextInput
          errorText='Error'
          placeholder='Gender'
          type='text'
          name='Gender'
        />
        {this.props.children}
      </ObjectForm>
    );
  }
}
