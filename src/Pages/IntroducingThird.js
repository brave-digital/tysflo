import React, { Component } from 'react'
import { RunGAPageView } from '../Components/GAFunctions'
import { Link } from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Page from '../Components/Page'
import CustomButton from '../Components/CustomButton'
import LogoGrid from '../Components/LogoGrid'

import asatvLogo from "../Assets/logos/ASATV.png";
import caxtonTvLogo from "../Assets/logos/CaxtonTv.jpg";
import caxtontvLogo from "../Assets/logos/caxtontv.png";
import cosafaLogo from "../Assets/logos/COSAFA.png";
import joburgTodayLogo from "../Assets/logos/joburgtoday.png";
import mediahostLogo from "../Assets/logos/mediahost.png";
import moneyWebLogo from "../Assets/logos/moneyWeb.png";
import noSubLogo from "../Assets/logos/noSub.png";
import onTargetLogo from "../Assets/logos/onTarget.png";
import { Helmet } from "react-helmet";


const customers = [
  {
    name: "test 1",
    logo: asatvLogo,
  },
  {
    name: "test 1",
    logo: caxtontvLogo,
  },
  {
    name: "test 2",
    logo: cosafaLogo,
  },
  {
    name: "test 1",
    logo: joburgTodayLogo,
  },
  {
    name: "test 2",
    logo: mediahostLogo,
  },
  {
    name: "test 1",
    logo: moneyWebLogo,
  },
  {
    name: "test 2",
    logo: noSubLogo,
  },
  {
    name: "test 2",
    logo: onTargetLogo,
  },
];

export default class IntroducingThird extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Introducing Selectcast | We're in Multiple Industries</title>
          <meta
            name="description"
            content="Introducing Tysflo Selectcast in Multiple Industries: Music, Media, Sports, Radio, Government, Education, Live Broadcasting, Corporate &amp; Entertainment."
          />
        </Helmet>
        <div className="intro third page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={10} xl={7}>
                <h5 className="mobi-hidden">Home.Intro journey</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">
                  Introducing TYSFLO Selectcast
                </h2>
                <h4 className="text-blue caption">
                  We’re making waves in multiple industries, such as music,
                  media, sports, radio, government, education, live
                  broadcasting, corporate and entertainment.
                </h4>
              </Col>
            </Row>
            <Row className="row-padding-bottom">
              <Col xs={11} xsOffset={1} sm={11} md={11} className=" row-padding-bottom">
                <LogoGrid customers={customers} />
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/about-us",
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
