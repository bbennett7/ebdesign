import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default class Bayshore extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Bayshore</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/z6cWprb/Common-area.jpg" alt="Common-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/DDG8J2W/Kitchen.jpg" alt="Kitchen" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/VjrsYr5/Chairs.jpg" alt="Chairs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/86cqTMC/Bench.jpg" alt="Bench" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/vZ89nmf/Desk.jpg" alt="Desk" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
