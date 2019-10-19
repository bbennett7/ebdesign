import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BY1 from '../images/residential-backyard/BY1.jpg';
import BY2 from '../images/residential-backyard/BY2.jpg';
import BY3 from '../images/residential-backyard/BY3.jpg';
import BY4 from '../images/residential-backyard/BY4.jpg';
import BY5 from '../images/residential-backyard/BY5.jpg';

export default class Backyard extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Backyard</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BY1}
                alt="First backyard"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BY4}
                alt="Fourth backyard"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BY5}
                alt="First backyard"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BY2}
                alt="Second backyard"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BY3}
                alt="First backyard"
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
