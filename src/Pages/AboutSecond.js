import React, { Component } from 'react'

import { RunGAPageView } from '../Components/GAFunctions'
import { Link } from 'react-router-dom'
import CustomButton from '../Components/CustomButton'
import Page from '../Components/Page'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Helmet } from "react-helmet";

export default class AboutSecond extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <Helmet>
          <title>Tysflo | About Us | Management Team</title>
          <meta
            name="description"
            content="Tysflo Was the Brainchild of Darryl Torr &amp; Alan Shenton, Award Winning Musicians &amp; Engineers. Get in Touch &amp; Together We’ll Build This New Media Economy."
          />
        </Helmet>
        <div className="about page-bg">
          <Grid fluid>
            <Row className="mobi-hidden">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5>Home.About us</h5>
                <div className="blue-hr small" />
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={10} md={7}>
                <h3 className="text-white top-margin ">
               About us - Management team
                </h3>
              </Col>
            </Row>
            <Row >
              <Col xs={11} xsOffset={1} sm={10} md={10} xl={5}>
                <h4 className="text-blue caption ">
                TYSFLO was the original brainchild of Darryl Torr &amp; Alan Shenton, award winning musicians and audio/video engineers. 
  
                </h4>
                <p>
                  Darryl and Alan conceived a monetisable video environment
                  together with a compression optimisation algorithm to
                  build fun and immersive video experiences on African data
                  networks.
                </p>
                <p>
                  Jyri Hamalainen joined the team from Multichoice with
                  background as DStv CTO Mobile. He saw the opportunity to
                  unlock new content marketplaces in Africa, to build a
                  company, help raise investment funding, and practically
                  drive the vision, resourcing, and product management.
                </p>
                <p>
                  Hilton McGregor has backgrounds in Silicon Valley
                  entrepreneurial start-up ventures, and as a fortune 500
                  tech lead architect, he joined TYSFLO to build a
                  production-ready, globally scalable network and
                  application architecture.
                </p>
                <p>
                  Waldo Marias has a background in new age software
                  development frameworks, and joined TYSFLO to lead the
                  software development team.
                </p>
                <p>
                  Get in touch with us, and together we’ll build this new
                  media economy.
                </p>
                <Link
                  to={{
                    pathname: "/contact-us",
                    state: { prev: true },
                  }}
                >
                  <CustomButton btnColour="pink" btnText="let's talk" />
                </Link>
              </Col>
            </Row>

            <div className="bottom-buttons">
              <Link
                to={{
                  pathname: "/contact-us",
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
