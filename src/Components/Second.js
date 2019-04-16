// Second, the component underneath first in dragger

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'


export default class Second extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Grid fluid className="second-control compared">
        <Row>
          <Col xs={10} xsOffset={1} sm={8} xsOffset={1}>
            <h5 className="mobi-hidden">Home</h5>
            <div className="blue-hr small mobi-hidden" />
            <h2 className="banner-heading text-pink no-margin-heading">
              Take <br /> Control
            </h2>
          </Col>
        </Row>

        <Row className="row-padding-bottom carousel">
          <Col xs={10} xsOffset={1} sm={5} smOffset={1}>
            <Carousel
              autoplay
              autoplayInterval={2000}
              wrapAround
              renderCenterLeftControls={({ previousSlide }) => null}
              renderCenterRightControls={({ nextSlide }) => null}
            >
              <div className="slide">
                <h4 className="text-blue-darker">
                  Large video sharing platforms don’t own the Internet.
                </h4>
                <div className="blue-darker-hr small" />
              </div>

              <div className="slide">
                <h4 className="text-blue-darker">
                  They don’t own your audience.
                </h4>
                <div className="blue-darker-hr small" />
              </div>

              <div className="slide">
                <h4 className="text-blue-darker">You are the Internet.</h4>
                <div className="blue-darker-hr small" />
              </div>
            </Carousel>
          </Col>
        </Row>

        <div className="bottom-buttons left">
          <Link
            to={{
              pathname: "/brand-owner",
              state: { prev: false },
            }}
          >
            <CustomButton btnText="I AM A BRAND OWNER" btnColour="blue" />
          </Link>
          <Link
            to={{
              pathname: "/media-owner",
              state: { prev: false },
            }}
          >
            <CustomButton btnText="I AM A MEDIA OWNER" btnColour="blue" />
          </Link>
        </div>
      </Grid>
    );
  }
}
