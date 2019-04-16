// BrandOwner Page

import React, { Component } from 'react'
import { RunGAPageView } from '../Components/GAFunctions'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import CustomButton from '../Components/CustomButton'
import Page from '../Components/Page'
import { Helmet } from "react-helmet";

export default class BrandOwner extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Brand Owner Journey</title>
          <meta
            name="description"
            content="Are You A Brand Owner? Current Video Sharing Platforms Are Taking Your Brand Equity.
            Right Now You Can't Engage Directly With Your Audience.
            "
          />
        </Helmet>
        <div className="brand-owner page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5 className="mobi-hidden">Home.Brand owner journey</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">
                  Are you a brand owner?
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={8}>
                <h4 className="text-blue caption">
                  Current video sharing platforms are taking your brand
                  equity.
                </h4>
              </Col>
            </Row>
            <Row className="row-padding-top">
              <Col
                xs={11}
                xsOffset={1}
                sm={10}
                smOffset={2}
                md={8}
                mdOffset={1}
                xlOffset={1}
                lgOffset={1}
              >
                <h3 className="text-white row-padding-bottom">
                  Right now you can't:
                </h3>
                <ul>
                  <li>
                    Choose what media content your media is associated with.
                  </li>
                  <li>
                    Prevent competing brands sitting alongside your own.
                  </li>
                  <li>Engage directly with your audience.</li>
                  <li>
                    Develop ongoing conversations with your target audience.
                  </li>
                  <li>Monetise your audience.</li>
                  <li>Produce ad creatives cost-efficiently.</li>
                </ul>
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/brand-owner-take-control",
                  state: { prev: true },
                }}
                className="next-page-btn"
              >
                <span className="icon-arrow-right" />
              </Link>
              <div className="buttons">
                <Link
                  to={{
                    pathname: "/media-owner",
                    state: { prev: true },
                  }}
                  className="mobi-hidden"
                >
                  <CustomButton
                    isGhost
                    btnColour="white"
                    btnText="I AM A mediA OWNER"
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
