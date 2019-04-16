// Mobile menu

import React, { Component } from "react";
import closeBtn from "../Assets/svgs/icon-close-menu.svg";

export default class MobiNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleSubmenu = this.toggleSubmenu.bind(this);
    this.buttonClosed = this.buttonClosed.bind(this);
    this.myRef = React.createRef();
  }

  toggleSubmenu(id) {
    const refKid = this.myRef.children;

    this.myRef.current.children[id].classList.toggle("active");
  }

  buttonClosed() {
    this.props.isClosed(true);
  }

  render() {
    const openClass = this.props.isOpen ? "mobi-nav open" : "mobi-nav";
    return (
      <div className={openClass}>
        <div className="menu-header">
          <img
            className="close-btn"
            src={closeBtn}
            alt="close icon"
            onClick={this.buttonClosed}
          />
        </div>

        <a href="/media-owner">
          <div className="head">
            <div className="btn-title-holder" onClick={this.buttonClosed}>
              <p className="text-white">I am a media owner</p>
            </div>
          </div>
        </a>

        <a href="/brand-owner">
          <div className="head">
            <div className="btn-title-holder" onClick={this.buttonClosed}>
              <p className="text-white">I am a brand owner</p>
            </div>
          </div>
        </a>

        <a href="/introducing-selectcast-network">
          <div className="head">
            <div className="btn-title-holder" onClick={this.buttonClosed}>
              <p className="text-white">Introducing Tysflo</p>
            </div>
          </div>
        </a>

        <a href="/about-us">
          <div className="head">
            <div className="btn-title-holder" onClick={this.buttonClosed}>
              <p className="text-white">About Us</p>
            </div>
          </div>
        </a>

        <a href="/contact-us">
          <div className="head">
            <div className="btn-title-holder" onClick={this.buttonClosed}>
              <p className="text-white">Get in touch</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
