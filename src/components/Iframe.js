import React, { Component } from 'react';

export default class Iframe extends Component {
  render() {
    return(
      <iframe className="Iframe" title="Map" src={this.props.src} width={this.props.width} height={this.props.height} />
    )
  }
}
