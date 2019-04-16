import React, { Component } from "react";

import { RunGAPageView } from "../Components/GAFunctions";
import { Link } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import Page from "../Components/Page";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Helmet } from "react-helmet";

import profile1 from "../Assets/img/profiles/Profile_01.jpg";
import profile2 from "../Assets/img/profiles/Profile_02.jpg";
import profile3 from "../Assets/img/profiles/Profile_03.jpg";

export default class About extends Component {
  constructor(props) {
    super(props);
    RunGAPageView();
  }

  render() {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | About Us</title>
          <meta
            name="description"
            content="About Tysflo - We Are the World’s First Fair-Play Video Economy Backed by Private Equity Funding by Major JSE Listed Companies in South Africa."
          />
        </Helmet>
        <div className="about page-bg">
          <Grid fluid>
            <Row className="mobi-hidden">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5>Home.About us</h5>
                <div className="blue-hr small" />
                {/* <h2 className="no-margin-heading">About us</h2> */}
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={10} md={10} xl={4}>
                <h3 className="text-white top-margin ">
                  About us - We are the world’s first fair-play video economy
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={10} md={10} xl={4}>
                <h4 className="text-blue caption ">
                  TYSFLO is backed by private equity funding by major JSE listed
                  companies in South Africa.
                </h4>
                <p>
                  We’re a bunch of crazy, bright and creative people who love
                  being part of the new video economy and turning the tables on
                  the status quo.
                </p>
              </Col>
            </Row>

            <Row className="row-padding-top">
              <Col xs={11} xsOffset={1} sm={10} md={6}>
                <div className="img-holder">
                  <div className="profile">
                    <img src={profile1} alt="Alan Shenton" />
                    <div className="info-block">
                      <p className="name"> Alan Shenton</p>
                    </div>
                  </div>
                  <div className="profile">
                    <img src={profile2} alt="Jyri Hamalainen" />
                    <div className="info-block">
                      <p className="name">Jyri Hamalainen</p>
                    </div>
                  </div>
                  <div className="profile">
                    <img src={profile3} alt="Darryl Torr" />
                    <div className="info-block">
                      <p className="name">Darryl Torr</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/about-us-management-team",
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
