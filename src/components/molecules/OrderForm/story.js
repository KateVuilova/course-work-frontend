import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderForm from './OrderForm';

storiesOf('2. Molecules / OrderForm', module)
	.add('Default', () => <OrderForm />);
