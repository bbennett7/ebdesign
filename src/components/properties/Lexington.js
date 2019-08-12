import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BBQs from '../../images/chadwick/BBQs.jpg';
import Fireplace from '../../images/chadwick/Fireplace.jpg';
import Pingpong from '../../images/chadwick/Pingpong.jpg';
import Pool from '../../images/chadwick/Pool.jpg';
import Seating from '../../images/chadwick/Seating.jpg';
import Tables from '../../images/chadwick/Tables.jpg';
import WorkStation from '../../images/chadwick/Work-station.jpg';

export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property">
        <h4>The Chadwick</h4>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Fireplace}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Seating}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={BBQs}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Pool}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Tables}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={WorkStation}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Pingpong}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
