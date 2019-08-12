import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property">
        <h5>The Chadwick</h5>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>

          <Carousel.Caption>
            <p>Living Room</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <p>Living room number 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
