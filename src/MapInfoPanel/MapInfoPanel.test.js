import React from 'react';
import { mount } from 'enzyme';
import MapInfoPanel from './MapInfoPanel';
import RechartsPie from '../RechartsPie/RechartsPie';

describe('MapInfoPanel', () => {
  it('should have a title prop', () => {
    const wrapper = mount(
      <MapInfoPanel title="Title" />,
    );
    expect(wrapper.find('MapInfoPanel').props().title).to.exist;
  });
  it('should render a pie chart component', () => {
    const wrapper = mount(
      <MapInfoPanel title="Title" />,
    );
    expect(wrapper.find(RechartsPie)).to.exist;
  });
});
