// First, the npisy part of the homepage, drag (above)

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class First extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Grid fluid className="first-noisy compared">
        <Row>
          <Col xs={10} xsOffset={1} sm={10} md={10} lg={8} xsOffset={1} xl={6}>
            <h5 className="mobi-hidden">Home</h5>
            <div className="blue-hr small mobi-hidden" />
            <h2 className="no-margin-heading">
              Every minute, 400 hrs of content is uploaded to large internet
              video sharing platforms.
            </h2>
          </Col>
        </Row>

        <Row className="row-padding-bottom">
          <Col xs={10} xsOffset={1} sm={8} md={9} xsOffset={1} lg={6} xl={5}>
            <h4 className="text-blue caption">
              This is now the most cluttered place on the Internet.
            </h4>
            <div className="blue-hr small" />

            <p>How can your content compete with 9 billion videos?</p>
            <p>
              Is your audience ‘walking through a massive supermarket’ full
              of distractions, trying to find what they’re looking for?
            </p>
            <p>
              Are your content and audience fairly valued and respected?
            </p>
            <p>Why does real monetisation of video remain elusive?</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
