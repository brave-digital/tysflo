// Custom Button
import React, { Component } from 'react'

export default class CustomButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ghost: this.props.isGhost,

      isBig: this.props.isBig,

      btnColour: this.props.btnColour,

      disabled: this.props.disabled
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.state.disabled) {
      this.setState({ disabled: nextProps.disabled });
    }
  }

  render () {
    let btnClass = this.state.ghost ? 'btn-ghost ' : ''
    let bigClass = this.state.isBig ? "btn-big" : ''
    let btnColourClass = this.state.btnColour
    let disabledClass = this.state.disabled ? 'disabled ' : ''
    return (
      <div onClick={this.props.onClick} className={'btn ' + btnClass + ' ' + btnColourClass + ' ' + bigClass + ' ' + disabledClass}>
        <p>{this.props.btnText}</p> <span className="icon-arrow-right"></span>
      </div>
    )
  }
}
