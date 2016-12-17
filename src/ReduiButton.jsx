'use strict'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import './ReduiButton.less'

export default class ReduiButton extends Component {
  static displayName = "ReduiButton"

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'normal', 'alert']),
    ghost: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    htmlType: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onHover: PropTypes.func
  }

  static defaultProps = {
    type: 'primary',
    ghost: false,
    size: 'middle',
    htmlType: 'button',
    disabled: false,
    onClick: () => {},
    onHover: () => {},
    className: ''
  }

  handleMouseEnter = (evt) => {
    this._mouseIn = true

    const { onHover } = this.props
    setTimeout(() => {
      if (this._mouseIn) {
        this._mouseIn = false
        onHover(evt)
      }
    }, 500)
  }
  handleMouseLeave = (evt) => {
    this._mouseIn = false
  }

  render() {
    const {
      type,
      ghost,
      size,
      htmlType,
      disabled,
      onClick,
      onHover,
      className,
      style,
      children, ...others
    } = this.props

    const cls = classnames(
      `redui-btn-${type}`,
      `redui-btn-${size}`,
      {
        'redui-btn-ghost': ghost,
        'redui-btn-disabled': disabled
      },
      className
    )

    return (
      <button
        onClick={onClick}
        className={`redui-btn ${cls}`}
        style={style}
        disabled={disabled}
        type={htmlType}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...others}
      >
        {children}
      </button>
    )
  }
}