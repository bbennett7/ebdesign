import React, { Component } from 'react';
import Headshot from '../images/459A9496 copy.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-content">
          <img className="About-image" src={Headshot} alt="Erin Boyle Headshot" />

          <h4 className="About-text">About Erin Boyle</h4>
          <br />
          <p className="About-text">Erin Boyle Design is a full-service multi-housing and residential design firm. As a renowned interior designer based in Los Angeles, CA, Erin has completed projects from Baltimore to Seattle over more than 10 years, and has experience cultivating and delivering designs in a limetless variety of styles. </p>
          <br /><br />
          <p className= "About-text">Erin and her team have worked with individuals and corporations to make what can sometimes be an overwhelming process one of simplicity and success. Her eye for color and detail makes each design something personal, and a unique reflection of the project. Erin Boyle Design is known for bringing beauty to function with hand-picked, carefully curated fabrics, furniture, accents and custom pieces.</p>
          <br /><br />
        </div>
      </div>
    )
  }
}
