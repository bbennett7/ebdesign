import React, { Component } from 'react';
import Iframe from './Iframe'


export default class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Contact-content">
          <h4 className="Contact-header">Contact Erin Boyle Design Inc.</h4>
          <br />
          <div className="Address">
            <p className="Address-text">9454 Wilshire Blvd., Penthouse</p>
            <p className="Address-text">Beverly Hills, CA 90212</p>
          </div>
          <br />
          <div className="Contact-info">
            <h5 className="Phone-text">p:</h5>
            <p className="Phone-text">&nbsp;(818) 809-2234</p><br />
            
            <h5 className="Phone-text">e:</h5>
            <p className="Phone-text">&nbsp;erin@erinboyledesign.com</p>
          </div>
          <br />
          <br />
          <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13220.436823496892!2d-118.3986664!3d34.0667147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27ff380ad1763282!2sErin+Boyle+Designs!5e0!3m2!1sen!2sus!4v1566512574260!5m2!1sen!2sus" width="100%" frameBorder="0" />

        </div>
      </div>
    )
  }
}
