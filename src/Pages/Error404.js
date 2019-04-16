import React, { Component } from 'react'

import { RunGAPageView } from '../Components/GAFunctions'
import Page from '../Components/Page'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Error404 extends Component {
  constructor (props) {
    super(props)
    RunGAPageView()
  }

  render () {
    return (
      <Page>
        <div className="terms page-bg">
          <Grid fluid>
            <Row>
              <Col xs={11} xsOffset={1} sm={11} md={11}>
                <h3 className="text-white top-margin ">
                 Whoops, can't find that page!
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xs={11} xsOffset={1} sm={11} md={10}>
                <h4 className="text-blue caption ">
                  Return <a href="/home">Home</a>
                </h4>
              </Col>
            </Row>
          </Grid>
        </div>
      </Page>
    );
  }
}
