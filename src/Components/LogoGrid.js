import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'


export default class LogoGrid extends Component {
  constructor(props) {
    super(props)
  }

  renderGrid() {
    let data = this.props.customers
    let list = []


    if (
      typeof data === "undefined" ||
      data === null ||
      data === "" ||
      data.length == 0
    ) {
      return <div>No Results</div>;
    }

    for (var i = 0; i < data.length; i++) {
      list.push(
        <img key={i} className='grid-item' src={data[i].logo} alt={'logo-' + i} />
      )

    }

    return list
  }

  render() {
    return (
      <div className="logo-grid">
        <Grid>
          <Row>
            <Col xs={11} sm={11} md={9} lg={10} lgOffset={1} mdOffset={1}>
              <p className="text-white top-margin">
                Customers who have taken control
              </p>
              <div className="logos">{this.renderGrid()}</div>


              <Row>
                <Col xs={12}>
                  <Row end="xs">
                    <Col xs={8} sm={5} >
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
