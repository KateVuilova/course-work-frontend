import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemList from './ItemList';

const list = [
  {
    id: '1',
    name: 'Kate Vuilova',
    children: [
      {
        id: '2',
		name: 'Child 1',
		children: [
			{
			  id: '4',
			  name: 'Child 1',
			},
			{
			  id: '5',
			  name: 'Child 2',
			},
		  ],
      },
      {
        id: '3',
        name: 'Child 2',
      },
    ],
  },
  {
    id: '6',
    name: 'Panda Coconut',
    children: [
      {
        id: '7',
		name: 'Child 1',
		children: [
			{
			  id: '9',
			  name: 'Child 1',
			},
			{
			  id: '10',
			  name: 'Child 2',
			},
		  ],
      },
      {
        id: '8',
        name: 'Child 2',
      },
    ],
  },
];

storiesOf('2. Molecules / ItemList', module).add('default', () => (
  <ItemList list={list} />
));
