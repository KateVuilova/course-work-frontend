import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';

export default class ObjectForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.TextInput
          errorText='Error'
          placeholder='Name'
          type='text'
          name='name'
          value={this.props.mode === 'edit' ? this.props.name : undefined}
          onChange={this.props.onNameChange}

        />
        {this.props.children}
        <div>
						<Form.Button disabled={this.props.submitting} className=''>Save</Form.Button>
				</div>
      </Form>
    );
  }
}
