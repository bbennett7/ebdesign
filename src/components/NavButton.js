import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavButton extends Component {
  render() {
    return (
      <Link to={this.props.url}>{this.props.linkText}</Link>
    )
  }
}
