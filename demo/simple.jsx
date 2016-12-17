import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReduiButton from '../src'

class DemoSimple extends Component {

  render() {
    return (
      <ReduiButton>Demo Simple</ReduiButton>
    )
  }
}

ReactDOM.render(
  <DemoSimple />,
  document.getElementById('red-ui-entry')
)