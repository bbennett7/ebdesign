import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import CenterArea from '../../images/vicino/Center-area.jpg';
import ChaiseLounges from '../../images/vicino/Chaise-lounges.jpg';
import Firepit from '../../images/vicino/Firepit.jpg';
import Gym from '../../images/vicino/Gym.jpg';
import LeasingExterior from '../../images/vicino/Leasing-office-exterior.jpg';
import LeasingInterior from '../../images/vicino/Leasing-office-interior.jpg';
import LoungeArea from '../../images/vicino/Lounge-area.jpg';
import OutdoorTV from '../../images/vicino/Outdoor-TV.jpg';
import PoolSeating from '../../images/vicino/Pool-seating.jpg';
import Pool from '../../images/vicino/Pool.jpg';
import IndoorTable from '../../images/vicino/Table.jpg';
import Treadmills from '../../images/vicino/Treadmills.jpg';

export default class Vicino extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Vicino</h4>
          <Carousel interval="null" className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingExterior}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingInterior}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CenterArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LoungeArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={IndoorTable}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Gym}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Treadmills}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Firepit}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={OutdoorTV}
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
                src={PoolSeating}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChaiseLounges}
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
