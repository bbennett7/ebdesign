import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class Property extends Component {
  render() {
    return(
      <div className="Property">
        <h5>{this.props.name}</h5>
        <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={this.props.firstImgSrc}
            alt="First slide of an apartment lobby"
          />
          <Carousel.Caption>
            <p>{this.props.firstImgTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={this.props.secondImgSrc}
            alt="First slide of an apartment lobby"
          />
          <Carousel.Caption>
            <p>{this.props.secondImgTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
