import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HumanForm from '../HumanForm';
import TextInput from '../TextInput';
import { userInfo } from '../../../redux/reducers';
import Form from '../Form';

class ClientForm extends Component {
  componentDidMount() {
    if (this.props.mode === 'edit') {
      console.log(this.props.item.id);
      this.props.getClient(this.props.item.id);
    }
  }

  handleSubmit = (data) => {
    if (this.props.mode === 'create') {
      this.props.onCreate(data);
    }
    this.props.onSubmit();
  }

  render() {
    console.log(this.props);
    return (
      <HumanForm onSubmit={this.handleSubmit} item={this.props.currentItem} mode={this.props.mode}>
        <Form.TextInput
          errorText='Error'
          placeholder='Contract'
          type='text'
          name='agreement'
          value={this.props.mode === 'edit' && this.props.currentItem ? this.props.currentItem.agreement : undefined}
        />
        <Form.TextInput
          errorText='Error'
          placeholder='Address'
          type='text'
          name='address'
          value={this.props.mode === 'edit' && this.props.currentItem ? this.props.currentItem.address : undefined}
        />
        {this.props.children}
      </HumanForm>
    );
  }
}

const mapStateToProps = ({ userInfo: { currentItem } }) => ({
  currentItem,
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (data) => dispatch(userInfo.createClient(data)),
  getClient: (id) => dispatch(userInfo.getClient(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);