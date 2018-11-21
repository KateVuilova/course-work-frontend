import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../../molecules/ItemList';

export default class MainList extends Component {
	render () {
		return (
			<ItemList list={[{ name: 'Kate Vuilova', id: '1' }, { name: 'Panda Coconut', id: '2' }]} />
		);
	}
}