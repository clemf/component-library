import React from 'react';
import { shallow } from 'enzyme';
import MapInfoPanel from './MapInfoPanel';

describe('MapInfoPanel', () => {
  it('should have a title prop', () => {
    const wrapper = shallow(
      <MapInfoPanel />,
    );
    expect(wrapper.props().title).to.exist;
  });
});
