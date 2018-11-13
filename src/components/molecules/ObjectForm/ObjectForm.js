import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';

export default class ObjectForm extends Component {
	render () {
		return (
			<Form>
				<TextInput
					errorText='Error'
					placeholder='Name'
					type='text'
					name='Name'
				/>
				{this.props.children}
			</Form>
		);
	}
}