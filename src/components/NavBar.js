import React, { Component } from 'react';
import '../App.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import NavButton from './NavButton'

export default class NavBar extends Component {
  render() {
    return (
      <Nav fill className="Nav-bar">
        <Nav.Item>
          <Nav.Link className="nav-border" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Multi-family" className="Top-level nav-dropdown nav-border">
            <NavDropdown drop="right" variant="secondary" title="By Property" className="Second-level nav-dropdown">
               <NavDropdown.Item eventKey="4.2" href="/multi-family/Bayshore">Bayshore</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.3" href="/multi-family/The-Chadwick">Chadwick</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.4" href="/multi-family/Corsica">Corsica</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.5" href="/multi-family/The-Lexington">The Lexington</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.6" href="/multi-family/Parc-5">Parc @ 5</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.7" href="/multi-family/Rockwood">Rockwood</NavDropdown.Item>
               <NavDropdown.Item eventKey="4.8" href="/multi-family/Vicino">Vicino</NavDropdown.Item>
             </NavDropdown>
             <NavDropdown drop="right" variant="secondary" title="By Area" className="Second-level nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Leasing Office</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Pool</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Office Lounge</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Gym</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.5">Exterior</NavDropdown.Item>
              </NavDropdown>
           </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Residential" className="Top-level nav-dropdown nav-border">
            <NavDropdown.Item eventKey="4.1" href="/residential/kitchen">Kitchen</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Living Room</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Outdoor Lounge</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Pool</NavDropdown.Item>
           </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-border" href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-border" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
