import React, { Component } from 'react';
import classNames from 'classnames';
import './styles.css';

export default class BoxShadow extends Component {
  getClassName = (className) =>
    classNames('BoxShadow', className)

  render () {
    return (
      <div className={this.getClassName(this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
