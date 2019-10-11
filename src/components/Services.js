import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return(
      <div className="Services">
        <div className="Services-content">
        <div className="Services-list">
          <h4> Services </h4>
            <div id="Services-col">
              <p>Interior Design</p>
              <p>Project Management</p>
              <p>Installation & Styling</p>
              <p>Vendor Logistics Support</p>
              <p>Custom Furniture</p>
              <p>FF&E Selection & Installation</p>
              <p>Furnishings & Fabrics</p>
              <p>Window Coverings</p>
              <p>Millwork & Cabinet Design</p>
              <p>Renovation Management</p>
              <p>Custom Renderings</p>
              <p>Finishes Sourcing</p>
              <p>Space Planning</p>
              <p>Lighting Design</p>
              <p>Window Treatments</p>
              <p>Construction Management</p>
            </div>
            <br />
        </div>


        <div className="Clients-list">
          <h4> Clients </h4>  
            <div id="Clients-col">
              <p>TruAmerica</p>
              <p>City View</p>
              <p>Kennedy Wilson</p>
              <p>Alcole Properties</p>
              <p>Greystar Management</p>
              <p>FPI Management</p>
              <p>E&S Ring Management</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
