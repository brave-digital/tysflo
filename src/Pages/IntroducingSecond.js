// IntroducingSecond Page

import React, { Component } from "react";
import { RunGAPageView } from "../Components/GAFunctions";
import { Grid, Row, Col } from "react-flexbox-grid";
import Accordion from "../Components/Accordion";
import { Link } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import Page from "../Components/Page";
import { Helmet } from "react-helmet";

export default class IntroducingSecond extends Component {
  constructor(props) {
    super(props);
    RunGAPageView();
  }

  render() {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Introducing Selectcast | Create Your Own Video Platform</title>
          <meta
            name="description"
            content="Introducing Tysflo Selectcast Create &amp; Manage Your Own Video Platform. Own the Distraction. Choose the Environment. Smart Partnerships. Easy-To-Use Tech."
          />
        </Helmet>
        <div className="intro second page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={12}>
                <h5 className="mobi-hidden">Home.Intro journey</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">
                  Introducing TYSFLO Selectcast
                </h2>
                <h4 className="text-blue caption">
                  Create and manage your own video platform
                </h4>
                <h3 className="text-white bigger-top-margin">
                  Own the distraction
                </h3>
              </Col>
            </Row>
            <Row className="row-padding-bottom">
              <Col
                xs={12}
                xsOffset={1}
                sm={11}
                md={11}
                mdOffset={1}
                className="row-padding-top row-padding-bottom"
              >
                <Accordion className="row-padding-bottom">
                  <div className="accordion">
                    <div className="head">
                      <h4 className="no-margin-heading">
                        Choose the environment
                      </h4>
                      <div className="title-hr" />
                    </div>
                    <div className="body">
                      <ul>
                        <li>Your own branded space.</li>
                        <li>
                          Embed your destination into any digital domain.
                        </li>
                        <li>
                          Define the conversation with user engagement
                          experiences.
                        </li>
                        <li>A trusted environment.</li>
                      </ul>
                      <ul>
                        <li>
                          Ownership to craft your viewers’ ‘distractions’.
                        </li>
                        <li>An online extension of your world.</li>
                        <li>The ability to sell Ad experiences.</li>
                        <li>
                          The opportunity to begin real consumer
                          conversations.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="head">
                      <h4 className="no-margin-heading">
                        Smart Partnerships
                      </h4>
                      <div className="title-hr" />
                    </div>
                    <div className="body">
                      <ul>
                        <li>Affiliate your content.</li>
                        <li>
                          Syndicate content with other destinations on your
                          own terms.
                        </li>
                        <li>
                          Create smarter packaged solutions for your
                          clients, with our production and sales house
                          network partners.
                        </li>
                        <li>
                          Work with our existing publishers to promote and
                          share content to wider audience verticals.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="head">
                      <h4 className="no-margin-heading">
                        Easy-to-use, cloud-based tech
                      </h4>
                      <div className="title-hr" />
                    </div>
                    <div className="body">
                      <ul>
                        <li>Unlimited users on a global scale.</li>
                        <li>Unlimited bandwidth and video storage.</li>
                        <li>Systems monitoring dashboards.</li>
                        <li>Mobile &amp; desktop.</li>
                      </ul>
                      <ul>
                        <li>
                          Immersive floating video navigation controls.
                        </li>
                        <li>
                          Smart content management and ad serving tools.
                        </li>
                        <li>
                          High speed dedicated video delivery network.
                        </li>
                        <li>Video compression optimisation.</li>
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/introducing-tysflo-selectcast-industries",
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
                    // isGhost
                    btnColour="blue-dark"
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
                    // isGhost
                    btnColour="blue-dark"
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
