import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Item, Separator, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { userInfo } from '../../../redux/reducers';
import ObjectForm from '../ObjectForm';
import WorkerForm from '../WorkerForm';
import ClientForm from '../ClienForm';
import DispatcherForm from '../DispatcherForm';
import DriverForm from '../DriverForm';
import ManagerForm from '../ManagerForm';
import Dialog from '../../atoms/Dialog';

import './styles.css';

class ItemList extends Component {
  static propTypes = {
    className: PropTypes.string,
    emptyGroupsText: PropTypes.string,
    groupList: PropTypes.array,
    onSelectGroup: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    expandedItems: [],
    clickedItem: {},
  };

  dialogRef = React.createRef();

  onClick = ({ event, props }) => console.log(event, props);

  onDeleteClick = () => {
    this.props.deleteClient(this.state.clickedItem.id);
  }

  onEditClick = () => {
    this.dialogRef.current.showModal();
  };

  renderMenu() {
    return (
      <Menu id='menu_id'>
        <Item onClick={this.onClick}>Create new inside</Item>
        <Item onClick={this.onEditClick}>Edit</Item>
        <Separator />
        <Item onClick={this.onDeleteClick}>Delete</Item>
      </Menu>
    );
  }

  renderForm() {
    switch (this.state.clickedItem.type) {
      case 'Worker':
        return <WorkerForm mode='edit' />;
      case 'Client':
        return <ClientForm mode='edit' item={this.state.clickedItem} />;
      case 'Dispatcher':
        return <DispatcherForm mode='edit' />;
      case 'Driver':
        return <DriverForm mode='edit' />;
      case 'Manager':
        return <ManagerForm mode='edit' />;
      default:
        return <ObjectForm mode='edit' />;
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
      <span>{this.state.clickedItem.type}</span>
        {this.renderForm()}
      </Dialog>
    );
  }

  getClassName({ className } = this.props) {
    return classNames('ItemList', className);
  }

  getInnerClassName({ className } = this.props) {
    return classNames('ItemList-inner', className);
  }

  handleLiClick = item => {
    if (item.children && !this.state.expandedItems.includes(item.id)) {
      this.setState({
        expandedItems: [...this.state.expandedItems, item.id],
      });
    } else if (item.children && this.state.expandedItems.includes(item.id)) {
      const expItems = [...this.state.expandedItems].filter(
        expItem => expItem !== item.id,
      );
      this.setState({ expandedItems: expItems });
    }
  };

  generateList({ list } = this.props) {
    if (!list) return;
    return list.map(item => {
      return (
        <Fragment>
          <li
            key={item.id}
            onClick={() => this.handleLiClick(item)}
            onContextMenu={() => this.setState({ clickedItem: item })}
          >
            <div>{item.name} <span>({item.type})</span></div>
          </li>
          {item.children && this.state.expandedItems.includes(item.id) && (
            <ul className={this.getInnerClassName(this.props.innerClassName)}>
              {this.generateList({ list: item.children })}
            </ul>
          )}
        </Fragment>
      );
    });
  }

  render() {
    const className = this.getClassName();
    return (
      <Fragment>
        <MenuProvider id='menu_id'>
          <div className={className}>{this.generateList()}</div>
        </MenuProvider>
        {this.renderMenu()}
        {this.renderForms()}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ userInfo: { currentItem } }) => ({
  currentItem,
});

const mapDispatchToProps = (dispatch) => ({
  deleteClient: (id) => dispatch(userInfo.deleteClient(id)),
});

export default connect(null, mapDispatchToProps)(ItemList);
