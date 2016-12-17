import React, { Component, PropTypes } from 'react'
import './ReduiButton.less'

export default class ReduiButton extends Component {
  static displayName = "ReduiButton"

  static propTypes = {
    foo: PropTypes.string
  }

  static defaultProps = {

  }

  state = {}

  componentDidMount() {

  }

  render() {
    const { children, ...others } = this.props
    return (
      <div className="redui-button" {...others} >
        {children}
      </div>
    )
  }
}