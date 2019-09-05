import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import B1 from '../../images/residential-bathroom/B1.jpg';
import B2 from '../../images/residential-bathroom/B2.jpg';
import B3 from '../../images/residential-bathroom/B3.jpg';
import B4 from '../../images/residential-bathroom/B4.jpg';


export default class Bathroom extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Bathroom</h4>
          <Carousel interval="null" className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={B1}
                alt="First bathroom"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={B2}
                alt="Second Bathroom"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={B3}
                alt="Third Bathroom"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={B4}
                alt="Fourth Bathroom"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
