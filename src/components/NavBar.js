import React, { Component } from 'react';
import '../App.css'

import NavButton from './NavButton'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="Nav-bar">
        <NavButton url="/home" linkText="Home" />
        <NavButton url="/about" linkText="About" />
        <NavButton url="/residential" linkText="Residental" />
        <NavButton url="/commercial" linkText="Commercial" />
        <NavButton url="/contact" linkText="Contact" />
      </nav>
    )
  }
}
