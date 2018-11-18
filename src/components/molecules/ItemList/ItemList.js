import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default class ItemList extends Component {

	static propTypes = {
		className: PropTypes.string,
		emptyGroupsText: PropTypes.string,
		groupList: PropTypes.array,
		onSelectGroup: PropTypes.func,
	}

	static defaultProps = {}

	generateList ({ list } = this.props) {
		return list.map((group) => {
			return (
				<li
					key={group._id}
				>
				Item
				</li>
			);
		});
	}

	getClassName ({ className } = this.props) {
		return classNames('ItemList', className);
	}

	render () {
		const className = this.getClassName();
		return (
			<div className={className}>
				{this.generateList()}
			</div>
		);
	}
}
