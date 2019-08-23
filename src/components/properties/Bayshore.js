import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Bench from '../../images/bayshore/Bench.jpg';
import Chairs from '../../images/bayshore/Chairs.jpg';
import CommonArea from '../../images/bayshore/Common-area.jpg';
import Desk from '../../images/bayshore/Desk.jpg';
import Kitchen from '../../images/bayshore/Kitchen.jpg';
import PoolTable from '../../images/bayshore/Pool-table.jpg';

export default class Bayshore extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Bayshore</h4>
          <Carousel interval="null" className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CommonArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolTable}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Kitchen}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Chairs}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Bench}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Desk}
                alt=""
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
