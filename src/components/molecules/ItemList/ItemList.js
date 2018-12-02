import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Item, Separator, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import WorkerForm from '../WorkerForm';
import DialogWithButtonGroup from '../DialogWithButtonGroup';

import './styles.css';

export default class ItemList extends Component {
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

  onEditClick = () => {
    this.dialogRef.current.showModal();
  };

  renderMenu() {
    return (
      <Menu id='menu_id'>
        <Item onClick={this.onClick}>Create new inside</Item>
        <Item onClick={this.onEditClick}>Edit</Item>
        <Separator />
        <Item onClick={this.onClick}>Delete</Item>
      </Menu>
    );
  }

  renderForms() {
    return (
      <DialogWithButtonGroup
        ref={this.dialogRef}
        className='ItemList-dialog'
        actionButtonLabel={'Save'}
			  cancelButtonLabel={'Cancel'}
      >
      <span>{this.state.clickedItem.type}</span>
        <WorkerForm />
      </DialogWithButtonGroup>
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
            {item.name}
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
