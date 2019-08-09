import React, { Component } from 'react';
import Property from './Property'

export default class Commercial extends Component {
  render() {
    return(
      <div className="Commercial">
        <Property name="The Chadwick" />
        <Property name="Aspen" />
      </div>
    )
  }
}
