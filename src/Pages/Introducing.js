// Introducing Page

import React, { Component } from 'react'
import { RunGAPageView } from '../Components/GAFunctions'
import { Link } from 'react-router-dom'
import CustomButton from '../Components/CustomButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Page from '../Components/Page'
import IntroSwitch from '../Components/IntroSwitch'
import { Helmet } from "react-helmet";


export default class Introducing extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Introducing Tysflo | Selectcast</title>
          <meta
            name="description"
            content="Introducing Tysflo Selectcast, The Smart Video Platform Network. We’d Like to Call for An End to The Modern Online Media Conundrum with Tysflo Selectcast."
          />
        </Helmet>
        <div className="intro page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5 className="mobi-hidden">Home.Intro journey</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">
                  Introducing TYSFLO Selectcast
                </h2>
              </Col>
            </Row>
            <Row>
              <Col
                xs={11}
                xsOffset={1}
                sm={9}
                md={5}
                className="row-padding-top"
              >
                <h3 className="text-white ">
                  The smart video platform network.
                </h3>
                <h4 className="text-blue caption">
                  We’d like to call for an end to the modern online media
                  conundrum and introduce
                </h4>

                <div>
                  <h4 className="text-blue caption ">TYSFLO</h4>
                  <h3 className="text-white">Selectcast</h3>
                </div>
                <p>
                  A bespoke video content environment where like-minded
                  audiences can purposefully engage with your content,
                  undistracted.
                </p>
              </Col>
              <Col xs={11} xsOffset={1} smOffset={0} sm={9} md={6}>
                <IntroSwitch />
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/introducing-selectcast-create-manage",
                  state: { prev: true },
                }}
                className="next-page-btn"
              >
                <span className="icon-arrow-right" />
              </Link>
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
