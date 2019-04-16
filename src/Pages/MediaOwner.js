// MediaOwner Page

import React, { Component } from 'react'
import { RunGAPageView } from '../Components/GAFunctions'
import Page from '../Components/Page'
import { Grid, Row, Col } from 'react-flexbox-grid'
import MediaCarousel from '../Components/MediaCarousel'
import CustomButton from '../Components/CustomButton'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class MediaOwner extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Media Owner Journey</title>
          <meta
            name="description"
            content="Are You a Media Owner? With Current Video Sharing Platforms Taking Your Audience and Your Money, How Can Your Customers Habitually Find Your Content?"
          />
        </Helmet>
        <div className="media-owner page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5 className="mobi-hidden">Home.Media owner journey</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">
                  Are you a media owner?
                </h2>
              </Col>
            </Row>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={7} md={8}>
                <h4 className="text-blue caption">
                  With current video sharing platforms taking your audience
                  and your money…
                </h4>
              </Col>
            </Row>
            <Row className="row-padding-top">
              <Col xs={12} xsOffset={0} sm={12}>
                <MediaCarousel />
              </Col>
            </Row>

            <div className="bottom-buttons">
              <div className="buttons">
                <Link
                  className="mobi-hidden"
                  to={{
                    pathname: "/brand-owner",
                    state: { prev: true },
                  }}
                >
                  <CustomButton
                    isGhost
                    btnColour="white"
                    btnText="I AM A BRAND OWNER"
                  />
                </Link>
              </div>
            </div>
          </Grid>
        </div>
      </Page>
    );
  }
}
