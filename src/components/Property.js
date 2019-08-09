import React, { Component } from 'react';

export default class Property extends Component {
  render() {
    return(
      <div className="Property">
        <h5>{this.props.name}</h5>
      </div>
    )
  }
}
