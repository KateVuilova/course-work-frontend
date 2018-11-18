import React from 'react';
import { storiesOf } from '@storybook/react';
import InvoiceForm from './InvoiceForm';

storiesOf('2. Molecules / InvoiceForm', module)
	.add('Default', () => <InvoiceForm />);
