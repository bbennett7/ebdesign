import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Nav fill>
        <Nav.Item>
          <Link to="/home"> Home </Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Multi-family" className="Top-level">
            <NavDropdown drop="right" variant="secondary" title="By Property" className="Second-level">
              <Link className="Bottom-level" to="/multi-family/Bayshore"> Bayshore </Link>
              <Link className="Bottom-level" to="/multi-family/The-Chadwick"> Chadwick </Link>
              <Link className="Bottom-level" to="/multi-family/Corsica"> Corsica </Link>
              <Link className="Bottom-level" to="/multi-family/Harborview"> Harborview </Link>
              <Link className="Bottom-level" to="/multi-family/The-Lexington"> The Lexington </Link>
              <Link className="Bottom-level" to="/multi-family/Parc-5"> Parc @ 5 </Link>
              <Link className="Bottom-level" to="/multi-family/Rockwood"> Rockwood </Link>
              <Link className="Bottom-level" to="/multi-family/Vicino"> Vicino </Link>
             </NavDropdown>
             <NavDropdown drop="right" variant="secondary" title="By Area" className="Second-level">
                <Link className="Bottom-level" to="/multi-family/barbecue"> Barbecue </Link>
                <Link className="Bottom-level" to="/multi-family/club-room"> Club Room </Link>
                <Link className="Bottom-level" to="/multi-family/exterior"> Exterior </Link>
                <Link className="Bottom-level" to="/multi-family/fitness-center"> Fitness Center </Link>
                <Link className="Bottom-level" to="/multi-family/game-room"> Game Room </Link>
                <Link className="Bottom-level" to="/multi-family/leasing-office"> Leasing Office </Link>
                <Link className="Bottom-level" to="/multi-family/outdoor-lounge"> Outdoor Lounge </Link>
                <Link className="Bottom-level" to="/multi-family/pool"> Pool </Link>
              </NavDropdown>
           </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Residential" className="Top-level">
            <Link className="Bottom-level" to="/residential/backyard"> Backyard </Link>
            <Link className="Bottom-level" to="/residential/bathroom"> Bathroom </Link>
            <Link className="Bottom-level" to="/residential/kitchen"> Kitchen </Link>
            <Link className="Bottom-level" to="/residential/living-room"> Living Room </Link>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Link to="/services"> Services </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about"> About </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact"> Contact </Link>
        </Nav.Item>
      </Nav>
    )
  }
}
