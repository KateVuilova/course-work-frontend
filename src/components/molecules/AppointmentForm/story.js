import React from 'react';
import { storiesOf } from '@storybook/react';
import AppointmentForm from './AppointmentForm';

storiesOf('2. Molecules / AppointmentForm', module)
	.add('Default', () => <AppointmentForm />);
