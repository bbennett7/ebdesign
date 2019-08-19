import React, { Component } from 'react';
import TempHeadshot from '../images/TempHeadshot.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-content">
          <img className="About-image" src={TempHeadshot} alt="Erin Boyle Headshot" />

          <h4 className="About-text">About Erin Boyle</h4>
          <br />
          <p className="About-text">Erin Boyle is a renowned interior designer based in Los Angeles, CA. Having completed more than X number of projects over more than X years, Erin has experience cultivating and delivering designs in a limetless variety of styles.</p>
          <br /><br />
          <p className= "About-text">From San Francisco, to San Diego, to the East coast, Erin has worked with individuals and corporations to make what can sometimes be an overwhelming process one of simplicity and success. Her eye for color and details makes each design something personal, and a unique reflection of the project. While Erin's main expertise is in multi-family residential redesign, she loves the opportunity to make a house feel like a home.</p>
          <br /><br />
        </div>
      </div>
    )
  }
}
