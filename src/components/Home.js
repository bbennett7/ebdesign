import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import AptLobby from '../images/carousel-images/AptLobby.jpg';
import AptPool from '../images/carousel-images/AptPool.png';
import LivingRoom from '../images/carousel-images/LivingRoom.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Home</p>

        <Carousel>
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={AptLobby}
              alt="First slide of an apartment lobby"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={AptPool}
              alt="Second slide of an apartment pool"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LivingRoom}
              alt="Third slide of a living room"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
