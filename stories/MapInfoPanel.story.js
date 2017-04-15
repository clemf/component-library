import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { MapInfoPanel } from '../src';

const displayName = 'Map Info Panel';
const title = 'Simple usage';
const description = 'Display neighborhood data from a map.';

const demoCode = () => (
  <MapInfoPanel title="Title!" />
);

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
  );
