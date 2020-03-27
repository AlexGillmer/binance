import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('App UI', () => {
  it('Should render App without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
