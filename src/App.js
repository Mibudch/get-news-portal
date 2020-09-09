import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test'
    }
  }
  render() {
    return (<div>{this.state.test}</div>)
  }
}
export default App