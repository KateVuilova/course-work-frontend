import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('Molecule - TextInput', () => {

	beforeAll(() => {
		jest.spyOn(TextInput.prototype, 'checkValidity');
		TextInput.prototype.checkValidity.mockImplementation(() => {});
	});

	it('Should render', () => {
		const wrapper = shallow(
			<TextInput
				errorText='Error'
				placeholder='Placeholder'
				type='text'
				name='Name'
			/>
		);
		wrapper.setState({ isValid: true });
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with error', () => {
		const wrapper = shallow(
			<TextInput
				errorText='Error'
				placeholder='Placeholder'
				type='text'
				name='Name'
			/>
		);
		wrapper.setState({ isValid: false });
		expect(wrapper).toMatchSnapshot();
	});

});
