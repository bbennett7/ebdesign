import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


export default class Pool extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Pool</h4>
        <Carousel interval="null" className="Carousel">

        </Carousel>
      </div>
    )
  }
}
