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
          <Nav.Link className="nav-border nav-item"><Link to="/home"> Home </Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Multi-family" className="Top-level nav-dropdown nav-border">
            <NavDropdown drop="right" variant="secondary" title="By Property" className="Second-level nav-dropdown">
               <NavDropdown.Item className="Inner-drop" eventKey="1.1"> <Link to="/multi-family/Bayshore"> Bayshore </Link> </NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.2"> <Link to="/multi-family/The-Chadwick"> Chadwick </Link> </NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.3"> <Link to="/multi-family/Corsica"> Corsica </Link> </NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.4"><Link to="/multi-family/Harborview"> Harborview </Link></NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.5"> <Link to="/multi-family/The-Lexington"> The Lexington </Link></NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.6"> <Link to="/multi-family/Parc-5"> Parc @ 5 </Link> </NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.7"> <Link to="/multi-family/Rockwood"> Rockwood </Link> </NavDropdown.Item>
               <NavDropdown.Item className="Inner-drop" eventKey="1.8"> <Link to="/multi-family/Vicino"> Vicino </Link> </NavDropdown.Item>
             </NavDropdown>
             <NavDropdown drop="right" variant="secondary" title="By Area" className="Second-level nav-dropdown">
                <NavDropdown.Item className="Inner-drop" eventKey="2.1"><Link to="/multi-family/barbecue"> Barbecue </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.2"><Link to="/multi-family/exterior"> Exterior </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.3"><Link to="/multi-family/fitness-center"> Fitness Center </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.4"><Link to="/multi-family/game-room"> Game Room </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.5"><Link to="/multi-family/leasing-office"> Leasing Office </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.6"><Link to="/multi-family/outdoor-lounge"> Outdoor Lounge </Link></NavDropdown.Item>
                <NavDropdown.Item className="Inner-drop" eventKey="2.7"><Link to="/multi-family/pool"> Pool </Link></NavDropdown.Item>
              </NavDropdown>
           </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Residential" className="Top-level nav-dropdown nav-border">
            <NavDropdown.Item eventKey="3.1"><Link to="/residential/backyard"> Backyard </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="3.2"> <Link to="/residential/bathroom"> Bathroom </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="3.3"> <Link to="/residential/kitchen"> Kitchen </Link> </NavDropdown.Item>
            <NavDropdown.Item eventKey="3.4"> <Link to="/residential/living-room"> Living Room </Link> </NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-border nav-item"> <Link to="/services"> Services </Link> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-border nav-item"> <Link to="/about"> About </Link> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-border nav-item" href="/contact"><Link to="/contact"> Contact </Link></Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
