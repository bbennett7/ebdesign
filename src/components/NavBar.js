import React, { Component } from 'react';
import '../App.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';

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
               <NavDropdown.Item eventKey="4.2"> <Link to="/multi-family/Bayshore"> Bayshore </Link> </NavDropdown.Item>
               <NavDropdown.Item eventKey="4.3"> <Link to="/multi-family/The-Chadwick"> Chadwick </Link> </NavDropdown.Item>
               <NavDropdown.Item eventKey="4.4"> <Link to="/multi-family/Corsica"> Corsica </Link> </NavDropdown.Item>
               <NavDropdown.Item eventKey="4.5"> <Link to="/multi-family/The-Lexington"> The Lexington </Link></NavDropdown.Item>
               <NavDropdown.Item eventKey="4.6"> <Link to="/multi-family/Parc-5"> Parc @ 5 </Link> </NavDropdown.Item>
               <NavDropdown.Item eventKey="4.7"> <Link to="/multi-family/Rockwood"> Rockwood </Link> </NavDropdown.Item>
               <NavDropdown.Item eventKey="4.8"> <Link to="/multi-family/Vicino"> Vicino </Link> </NavDropdown.Item>
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
            <NavDropdown.Item eventKey="4.1"> <Link to="/residential/bathroom"> Bathroom </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1"> <Link to="/residential/kitchen"> Kitchen </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2"> <Link to="/residential/living-room"> Living Room </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3"><Link to="/residential/backyard"> Backyard </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4"><Link> Pool </Link> </NavDropdown.Item>
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
