import React from 'react';
import { storiesOf } from '@storybook/react';
import BoxShadow from './BoxShadow';

storiesOf('Atoms / BoxShadow', module).add('Default', () => (
  <BoxShadow>
    <div style={{ height: '100px', padding: '25px' }}>Hello!</div>
  </BoxShadow>
));
