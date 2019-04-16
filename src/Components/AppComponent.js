// AppComponent

import React, { Component } from "react";
import "../../favicon.ico";
import { Route, Switch,withRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Nav from "../Components/Nav";
import MobiNav from "../Components/MobiNav";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MediaOwner from "../Pages/MediaOwner";
import BrandOwner from "../Pages/BrandOwner";
import BrandOwnerSecond from "../Pages/BrandOwnerSecond";
import Introducing from "../Pages/Introducing";
import ContactUs from "../Pages/Contact";
import menuIcon from "../Assets/svgs/icon-hamburger.svg";
import IntroducingSecond from "../Pages/IntroducingSecond";
import IntroducingThird from "../Pages/IntroducingThird";
import AboutSecond from "../Pages/AboutSecond";
import TermsConditions from "../Pages/TermsConditions";
import Error404 from "../Pages/Error404";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      showBrowserMsg: true,
      isTerms : false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: true });
  }

  handleMenuClose(isClosed) {
    this.setState({ menuOpen: !isClosed });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="app-wrapper">
          <Nav />
          <img
            src={menuIcon}
            onClick={this.handleMenuClick}
            className="hamburger"
            alt="hamburger-icon"
          />
          <MobiNav
            isOpen={this.state.menuOpen}
            isClosed={this.handleMenuClose}
          />

          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    classNames="page"
                    timeout={{
                      enter: 1000,
                      exit: 1000,
                    }}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/home" component={Home} />
                          <Route path="/about-us" component={About} />
                          <Route path="/about-us-management-team" component={AboutSecond} />
                          <Route path="/media-owner" component={MediaOwner} />
                          <Route path="/brand-owner" component={BrandOwner} />
                          <Route
                            path="/brand-owner-take-control"
                            component={BrandOwnerSecond}
                          />
                          <Route path="/introducing-selectcast-network" component={Introducing} />
                          <Route
                            path="/introducing-selectcast-create-manage"
                            component={IntroducingSecond}
                          />
                          <Route
                            path="/introducing-tysflo-selectcast-industries"
                            component={IntroducingThird}
                          />
                          <Route path="/contact-us" component={ContactUs} />
                          <Route
                            path="/terms-and-conditions"
                            component={TermsConditions}
                          />
                          <Route component={Error404} />
                        </Switch>
                      )}
                    />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
          {this.props.location.pathname !== "/terms-and-conditions" ? (
            <div className="ts-cs-link">
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="use-portrait">
          This site is best viewed in portrait mode
        </div>
      </div>
    );
  }
}


export default withRouter(AppComponent);