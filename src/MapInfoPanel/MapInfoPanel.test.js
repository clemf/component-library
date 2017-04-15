import React from 'react';
import { mount } from 'enzyme';
import MapInfoPanel from './MapInfoPanel';

describe('MapInfoPanel', () => {
  it('should have a title prop', () => {
    const wrapper = mount(
      <MapInfoPanel title="Title" />,
    );
    expect(wrapper.find('MapInfoPanel').props().title).to.exist;
  });
});
