import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import leftArrow from '../Assets/svgs/icons/arrow-left.svg'
import rightArrow from '../Assets/svgs/icons/arrow-right.svg'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

import Carousel from 'nuka-carousel'

export default class MediaCarousel extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {

  }

  render () {
    return (
      <div className="carousel">
        <Grid fluid>
          <Row center="xs">
            <Col
              xs={12}
              xsOffset={1}
              sm={12}
              md={11}
              lg={10}
              lgOffset={1}
              mdOffset={1}
            >
              <Carousel
              autoplay
              autoplayInterval={2000}

              wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className="left" onClick={previousSlide}>
                    <img src={leftArrow} alt="left-icon-arrow" />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className="right" onClick={nextSlide}>
                    <img src={rightArrow} alt="right-icon-arrow" />
                  </button>
                )}
              >
                <Row
                  start="xs"
                  className="slide row-padding-top row-padding-bottom"
                >
                  <Col xs={9} md={10} mdOffset={0} xl={6} xlOffset={1} xsOffset={1} >
                    <h5 className="text-yellow">Question:</h5>
                    <h3 className="text-white">
                      How can customers habitually find your content?
                    </h3>
                  </Col>
                </Row>
                {/*  */}
                <Row
                  start="xs"
                  className="slide row-padding-top row-padding-bottom"
                >
                  <Col xs={9} md={10} mdOffset={0} xl={6} xlOffset={1} xsOffset={1}>
                    <h5 className="text-yellow">Question:</h5>
                    <h3 className="text-white">
                      How can your intended audience find what interests
                      them without tedium and distraction?
                    </h3>
                  </Col>
                </Row>
                {/*  */}
                <Row
                  start="xs"
                  className="slide row-padding-top row-padding-bottom"
                >
                  <Col xs={9} md={10} mdOffset={0} xl={6} xlOffset={1} xsOffset={1}>
                    <h5 className="text-yellow">Question:</h5>
                    <h3 className="text-white">
                      Where can you create meaningful, personalised content
                      engagements that respect your discerning audience?
                    </h3>
                  </Col>
                </Row>
                {/*  */}
                <Row
                  start="xs"
                  className="slide row-padding-top row-padding-bottom"
                >
                  <Col xs={9} md={10} mdOffset={0} xl={6} xlOffset={1} xsOffset={1}>
                    <h5 className="text-yellow">Question:</h5>
                    <h3 className="text-white">
                      How can you deliver great quality HD video online?
                    </h3>
                  </Col>
                </Row>

                {/*  */}
                <Row
                  start="xs"
                  className="slide row-padding-top row-padding-bottom"
                >
                  <Col xs={10} xsOffset={1} mdOffset={0} md={11}>
                    <div className="endSlide">
                      <div className="icon-info">
                        <div>
                          <span className="icon-broadcast" />
                          <p>Become your own broadcast destination.</p>
                        </div>
                        <div>
                          <span className="icon-audience" />
                          <p>Reach, own and grow your intended audience.</p>
                        </div>
                        <div>
                          <span className="icon-Promote" />
                          <p>
                            Own and promote an advertising environment that
                            informs, educates and entertains.
                          </p>
                        </div>
                      </div>

                      <div className="icon-info">
                        <div>
                          <span className="icon-Business" />
                          <p>Let your media content grow your business.</p>
                        </div>
                        <div>
                          <span className="icon-Demand" />
                          <p>Support Live &amp; Linear, Video on Demand.</p>
                        </div>
                        <Link
                          to={{
                            pathname: "/introducing-selectcast-network",
                            state: { prev: true },
                          }}
                        >
                          <CustomButton
                            btnColour="pink"
                            btnText="FIND OUT HOW"
                          />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
