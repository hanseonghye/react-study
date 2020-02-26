import React, { Component } from 'react'
import Headers from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        {this.props.children}
      </div>
    )
  }
}


export default App