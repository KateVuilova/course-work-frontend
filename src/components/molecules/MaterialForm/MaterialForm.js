import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectForm from '../ObjectForm';
import TextInput from '../TextInput';

export default class MaterialForm extends Component {
  render() {
    return (
      <ObjectForm>
        <TextInput
          errorText='Error'
          placeholder='State'
          type='text'
          name='State'
        />
        {this.props.children}
      </ObjectForm>
    );
  }
}
