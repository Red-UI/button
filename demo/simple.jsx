import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '../src'

class DemoSimple extends Component {

  onHover = () => {
    console.log('onhover')
  }

  render() {
    return (
      <div>
        <Button>Primary</Button>
        <Button disabled>Primary + Disabled</Button>
        <Button onHover={this.onHover}>Trigger Hover</Button>
      </div>
    )
  }
}

ReactDOM.render(
  <DemoSimple />,
  document.getElementById('red-ui-entry')
)