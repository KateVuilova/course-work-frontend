/* eslint-disable react/no-multi-comp */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../atoms/Button';
import TextInput from '../TextInput';
import CheckboxInput from '../CheckboxInput';
import './styles.css';

const getClassName = (baseName, { className }) => (
	classNames(baseName, className)
);
const { Consumer, Provider } = createContext();

export default class Form extends Component {

	state = {
		showError: false,
		isFormValid: false,
	}

	getRef = (el) => {
		this.el = el;
	}

	getInputValues (formData) {
		return Array.from(formData.entries())
			.reduce((prev, curr) => {
				const [key, value] = curr;
				prev[key] = value;
				return prev;
			}, {});
	}

	handleChange = () => {
		const isFormValid = this.el.checkValidity();
		this.setState((state) => {
			if (state.isFormValid === isFormValid) return null;
			return { isFormValid };
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ showError: true });
		const form = event.target;
		if (!this.state.isFormValid) return;
		const formData = new FormData(form);
		const inputValues = this.getInputValues(formData);
		this.props.onSubmit(inputValues);
	}

	render () {
		const { children, className, header, paragraph } = this.props;
		return (
			<div className={`Form ${className}`}>
				{
					header &&
					<div className='Form-header'>{header}</div>
				}
				{
					paragraph &&
					<div className='Form-paragraph'>{paragraph}</div>
				}

				<form
					className='Form-form'
					noValidate onChange={this.handleChange}
					onSubmit={this.handleSubmit}
					ref={this.getRef}
				>
					<Provider value={{ ...this.state }}>
						{children}
					</Provider>
				</form>
			</div>
		);
	}
}

Form.TextInput = (props) => (
	<Consumer>
		{({ showError }) => (
			<TextInput
				{...props} {...{ showError }}
				className={getClassName('Form-textInputWrapper', props)}
			/>)}
	</Consumer>
);

Form.Checkbox = (props) => (
	<Consumer>
		{({ showError }) => (
			<CheckboxInput
				{...props} {...{ showError }}
				className={getClassName('Form-textInputWrapper', props)}
			/>)}
	</Consumer>
);

Form.Button = (props) =>
	<Button {...props} type='submit' className={getClassName('Form-buttonWrapper', props)} />;

Form.defaultProps = {
	onSubmit: () => {},
	className: '',
};

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	onSubmit: PropTypes.func,
	paragraph: PropTypes.string,
	submitting: PropTypes.bool,
};
