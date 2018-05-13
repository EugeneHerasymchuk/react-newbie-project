import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toolbar from './Toolbar';
import NavigationItem from '../NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
  it('should render 3 <NavigationItem />', () => {
    const wrapper = shallow(<Toolbar />);

    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
