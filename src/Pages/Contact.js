import React, { Component } from "react";
import { RunGAPageView } from "../Components/GAFunctions";
import { Link } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import Page from "../Components/Page";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Helmet } from "react-helmet";


var Recaptcha = require("react-recaptcha");

export default class Contact extends Component {
  constructor(props) {
    super(props);
    RunGAPageView();

    this.state = {
      value: "",
      email: "",
      name: "",
      company: "",
      message: "",
      valid: true,
      recaptchaTicked: false,
      isDisabled: true,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.checkIfDisabled = this.checkIfDisabled.bind(this);
  }

  handleSubmit() {
    let values = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      message: this.state.message,
    };
    console.log("hey! YOu've submitted the form :D");
    console.log("here's the fields you're sending: ", values);
  }

  callback = () => {
    console.log("Done!!!!");
  };

  verifyCallback = response => {
    console.log(response);
    this.setState(prevState => ({
      recaptchaTicked: !prevState.recaptchaTicked,
    }), () => {
      this.checkIfDisabled();
    });
  };

  handleEmailChange(event) {
    const email = event.target.value;
    const emailValid = this.validateEmail(email);

    this.setState({
      email: event.target.value,
      valid: emailValid,
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  checkIfDisabled() {
    if (this.state.valid == true && this.state.recaptchaTicked == true) {
      console.log("HELLOOO??");
      this.setState(prevState => ({
        isDisabled: !prevState.isDisabled,
      }));
      return false;
    }
  }

  render() {
    let fieldContainerClass = "field-container";
    const { email, valid } = this.state;
    if (!valid) {
      fieldContainerClass += " error";
    }
    console.log("STATE", this.state.valid, "+", this.state.recaptchaTicked, "disabled is:", this.state.isDisabled);
    return (
      <Page>
        <Helmet>
          <title>Tysflo | Get in Touch | Contact Us</title>
          <meta
            name="description"
            content="Contact Us. Take Control with Tysflo and Create and Manage Your Own Branded Video Platform. Call: 010 590 4554. Email: Letstalk@Tysflo.Com"
          />
        </Helmet>
        <div className="contact page-bg">
          <Grid fluid>
            <Row className="">
              <Col xs={11} xsOffset={1} sm={10}>
                <h5 className="mobi-hidden">Home.Get in touch</h5>
                <div className="blue-hr small mobi-hidden" />
                <h2 className="no-margin-heading">Contact us</h2>
              </Col>
            </Row>

            <Row className="row-padding-bottom">
              <Col xs={11} xsOffset={1} sm={10} md={6}>
                <h4 className="text-blue caption bottom-margin">
                  Take control with TYSFLO
                </h4>
                <p className="bigger-top-margin">
                  Create and manage your own branded video platform.
                </p>
              </Col>
            </Row>

            <Row className="row-padding-top">
              <Col xs={11} xsOffset={1} sm={10} md={3}>
                <p className="no-margin-heading">
                  <span className="text-blue">Call:</span>
                  &nbsp;
                  <a href="tel:0105904554">010 590 4554</a>
                </p>
                <p className="no-margin-heading">
                  <span className="text-blue">Email:</span>
                  &nbsp;
                  <a href="mailto: letstalk@tysflo.com">
                    letstalk@tysflo.com
                  </a>
                </p>
                <br />
                <p>
                  <span className="text-blue">Address:</span> <br />
                  Block 3, Burnside Office Park, <br />
                  410 Jan Smuts Avenue, <br />
                  Craighall Park
                </p>
              </Col>
              <Col xs={11} xsOffset={1} smOffset={0} sm={7} md={4}>
                <p className="text-blue no-margin-heading">Get in touch</p>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                    placeholder="Name"
                  />

                  <div className={fieldContainerClass}>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={event => this.handleEmailChange(event)}
                      placeholder="Email"
                    />
                    <span>Invalid e-mail address</span>
                  </div>

                  <input
                    type="text"
                    name="company"
                    value={this.state.company}
                    onChange={event => this.handleChange(event)}
                    placeholder="Company"
                  />

                  <textarea
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="Message"
                    onChange={event => this.handleChange(event)}
                    cols="35"
                    rows="5"
                  />
                </form>

                <div className="bigger-top-margin">
                  <Recaptcha
                    sitekey="6Lci2p0UAAAAALxyiH5KI-Wepif7BEn1whSIrg-I"
                    render="explicit"
                    verifyCallback={this.verifyCallback}
                    onloadCallback={this.callback}
                  />
                </div>

                <CustomButton
                  btnColour="pink"
                  disabled={this.state.isDisabled}
                  isBig
                  btnText="get in touch"
                  onClick={() => this.handleSubmit()}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </Page>
    );
  }
}
