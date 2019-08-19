import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Residential extends Component {
  render() {
    return(
      <div className="Residential">
        <div className="Residential-content">
          <h4 className="Property-links dropdown-menu" aria-labelledby="dropdownMenuButton" >
            <Link className="Property-link dropdown-item" to='/commercial/Jim'>Jim</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link dropdown-item" to='/commercial/Levine'>Levine</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link dropdown-item" to='/commercial/Ohebshalom'>Ohebshalom</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link dropdown-item" to='/commercial/Silverberg'>Silverberg</Link><br />
          </h4>
        </div>
      </div>
    )
  }
}
