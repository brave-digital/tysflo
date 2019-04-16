// BrandOwnerSecond Page

import React, { Component } from 'react'
import { RunGAPageView } from '../Components/GAFunctions'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import CustomButton from '../Components/CustomButton'
import Page from '../Components/Page'
import { Helmet } from "react-helmet";


export default class BrandOwnerSecond extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Brand Owner Journey | Take Control</title>
          <meta
            name="description"
            content="Current Video Sharing Platforms Are Taking Your Brand Equity. Take Control with Tysflo. Make Advertising Meaningful, Entertaining, And Relevant Again."
          />
        </Helmet>
        <div className="brand-owner second page-bg">
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
            <Row className="">
              <Col xs={11} sm={10} xsOffset={1}>
                <h4 className="text-blue caption">
                  Current video sharing platforms are taking your brand
                  equity.
                </h4>
              </Col>
            </Row>
            <Row className="row-padding-top ">
              <Col
                xs={11}
                xsOffset={1}
                sm={10}
                smOffset={1}
                md={8}
                mdOffset={1}
                lgOffset={1}
                xlOffset={1}
              >
                <h3 className="text-white row-padding-bottom">
                  Take control with TYSFLO
                </h3>

                <ul>
                  <li>
                    Make advertising meaningful, entertaining, and relevant
                    again.
                  </li>
                  <li>
                    Reach your intended audience with real authentic
                    engagement and ongoing conversations.
                  </li>
                  <li>Smart packaged ad solutions.</li>
                  <li>Create a new standard in Advertising.</li>
                </ul>
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/introducing-selectcast-network",
                  state: { prev: true },
                }}
                className="next-page-btn"
              >
                <span className="icon-arrow-right" />
              </Link>
              <div className="buttons mobi-hidden">
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
