import React, { Component } from 'react'

import Header from "./Header"
import Gnb from "./Gnb"
import Footer from "./Footer"

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gnb />
        Main
        <Footer />
      </div>
    )
  }
}


export default Main