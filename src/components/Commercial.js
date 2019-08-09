import React, { Component } from 'react';
import Property from './Property'

// Chadwick Images
import LivingRoom1 from '../images/chadwick/LivingRoom1.jpg';
import LivingRoom2 from '../images/chadwick/LivingRoom2.jpg';

export default class Commercial extends Component {


  render() {
    return(
      <div className="Commercial">
        <Property
          name="The Chadwick"
          firstImgSrc={LivingRoom1}
          firstImgTitle="Living Room"/>
        <Property name="Aspen" />
      </div>
    )
  }
}
