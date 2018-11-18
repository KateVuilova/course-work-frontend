import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemList from './ItemList';

storiesOf('2. Molecules / ItemList', module)
	.add('default', () => <ItemList list={['', '', '', '']} />);
