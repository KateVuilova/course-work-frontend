import React, { Component } from 'react';
import ObjectForm from '../../molecules/ObjectForm';
import WorkerForm from '../../molecules/WorkerForm';
import ClientForm from '../../molecules/ClienForm';
import DispatcherForm from '../../molecules/DispatcherForm';
import DriverForm from '../../molecules/DriverForm';
import ManagerForm from '../../molecules/ManagerForm';
import Dialog from '../../atoms/Dialog';

import './styles.css';
import { Item } from 'react-contexify';

export default class CreateView extends Component {
	state = {
		clickedItem: '',
	};

	dialogRef = React.createRef();

	handleChange = (event) => {
		this.setState({ clickedItem: event.target.value });
		this.dialogRef.current.showModal();
	  }

	handleSubmit = (data) => {
		this.setState({ data });
	}

	renderForm() {
		switch (this.state.clickedItem) {
		  case 'Worker':
			return <WorkerForm mode='create' />;
		  case 'Client':
			return <ClientForm mode='create' onSubmit={() => this.dialogRef.current.close()} />;
		  case 'Dispatcher':
			return <DispatcherForm mode='create' />;
		  case 'Driver':
			return <DriverForm mode='create' />;
		  case 'Manager':
			return <ManagerForm mode='create' />;
		  default:
			return <ObjectForm mode='create' />;
		}
	  }
	
	  renderForms() {
		return (
		  <Dialog
			ref={this.dialogRef}
			className='ItemList-dialog'
			actionButtonLabel={'Save'}
			cancelButtonLabel={'Cancel'}
		  >
		  <span>{this.state.clickedItem}</span>
			{this.renderForm()}
		  </Dialog>
		);
	  }

	render () {
		return (
			<div className='CreateView'>
				<select onChange={this.handleChange}>
					{this.props.list.map((item) => {
						return <option value={item.name}>{item.name}</option>
					})}
				</select>
				{this.renderForms()}
			</div>
		);
	}
}