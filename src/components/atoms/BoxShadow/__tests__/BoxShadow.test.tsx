import React from 'react';
import { shallow } from 'enzyme';
import BoxShadow from '../BoxShadow';

describe('BoxShadow', () => {
  it('should render', () => {
    const wrapper = shallow(<BoxShadow />);
    expect(wrapper).toMatchSnapshot();
  });
});
