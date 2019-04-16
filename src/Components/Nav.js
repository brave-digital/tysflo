// Main navigation

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import logo from '../Assets/svgs/Tysflo-white.svg'

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        <div className='nav-halves left'>
        <a href="/home">
          <img className='logo' src={logo} alt='tys-flo-logo' />
        </a>
        </div>
        <div className='nav-halves right'>
          <div className='link-holder'>
            <a href='/media-owner' className='link'>
              I am a media owner
            </a>

            <a href='/brand-owner' className='link'>
              I am a brand owner
            </a>

            <a href='/introducing-selectcast-network' className='link'>
              Introducing Tysflo
            </a>

            <a href='/about-us' className='link'>
              About Us
            </a>

            <a href='/contact-us' className='link'>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    )
  }
}
