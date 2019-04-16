import React, { Component } from 'react'
import tv from '../Assets/pngs/TV.png'
import ipad from '../Assets/pngs/IPAD.png'
import mobi from '../Assets/pngs/IPHONE.png'

export default class IntroSwitch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneSelected: true,
      ipadSelected: false,
      tvSelected: false
    }
    this.handleIPADClick = this.handleIPADClick.bind(this);
    this.handlePhoneClick = this.handlePhoneClick.bind(this);
    this.handleTVClick = this.handleTVClick.bind(this);
  }

  handlePhoneClick = () => {
    this.setState({
      phoneSelected: true,
      ipadSelected: false,
      tvSelected: false
    })
  }

  handleIPADClick = () => {
    this.setState({
      ipadSelected: true,
      phoneSelected: false,
      tvSelected: false
    })
  }

  handleTVClick = () => {
    this.setState({
      tvSelected: true,
      phoneSelected: false,
      ipadSelected: false
    })
  }

  render () {
    return (
      <div className='intro-switch'>
        <div className='image-holder'>
          {this.state.ipadSelected ? (
            <img alt="selector-image" src={ipad} />
          ) : this.state.tvSelected ? (
            <img alt="selector-image" src={tv} />
          ) : (
            <img alt="selector-image" src={mobi} />
          )}
        </div>

        <div className='button-holder'>
          {this.state.phoneSelected ? (
            <span className='icon-phone-selected selected btn-show' />
          ) : (
            <span
              className='icon-Phone btn-show'
              onClick={() => this.handlePhoneClick()}
              />
            )}



          {this.state.ipadSelected ? (
            <span className='icon-iPad-selected selected btn-show' />
          ) : (
              <span
                className='icon-iPad btn-show'
                onClick={() => this.handleIPADClick()}
              />
            )}

          {this.state.tvSelected ? (
            <span className='icon-TV-selected selected btn-show' />
          ) : (
              <span
                className='icon-TV btn-show'
                onClick={() => this.handleTVClick()}
              />
            )}
        </div>
      </div>
    )
  }
}
