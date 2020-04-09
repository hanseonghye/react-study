import React, { Component } from 'react';
import axios from 'axios'


class ViewBoard extends Component {
  constructor() {
    super()

    this.state = {
      content : ''
    }

    
    this.viewBoard()
  }


  viewBoard() {
    const apiUrl = 'dummy/board.json'

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          content: data.data.board.content
        })
      })
      .catch(error => {
      console.log(error)
      })
  }


  render() {
    return (
      <div>
        <p>{this.state.content}</p></div>
    )
  }
}


export default ViewBoard