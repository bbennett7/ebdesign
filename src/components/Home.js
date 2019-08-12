import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Bathroom from '../images/home-carousel/Bathroom.jpg';
import Kitchen from '../images/home-carousel/Kitchen.jpg';
import LeasingOffice from '../images/home-carousel/LeasingOffice.jpg';
import Platter from '../images/home-carousel/Platter.jpg';
import Pool from '../images/home-carousel/Pool.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel className="Home-carousel">
          <Carousel.Item>
            <img
              className="Home-carousel-image"
              src={Pool}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              src={LeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              src={Kitchen}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              src={Platter}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              src={Bathroom}
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
