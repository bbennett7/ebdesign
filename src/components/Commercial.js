import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Commercial extends Component {


  render() {
    return(
      <div className="Commercial">
        <div className="Commercial-content">
          <h4 className="Property-links">
            <Link className="Property-link" to='/commercial/The-Chadwick'>The Chadwick</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link" to='/commercial/The-Lexington'>The Lexington</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link" to='/commercial/Parc-5'>Parc 5</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link" to='/commercial/Parker'>The Parker</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link" to='/commercial/Rockwood'>Rockwood</Link><br /><br />
            <hr className="Header-rule"/><br />
            <Link className="Property-link" to='/commercial/Parc-5'>Silverberg</Link><br /><br /><br />
          </h4>
        </div>
      </div>
    )
  }
}
