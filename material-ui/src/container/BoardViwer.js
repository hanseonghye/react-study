import React, { Component } from 'react'
import Axios from 'axios'


class BoardViwer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: {}
    }
  }


  componentDidMount() {
    this._getBoard()
  }


  _getBoard() {
    const apiUrl = '/dummy/board.json'

    Axios.get(apiUrl)
      .then(data => {
        this.setState({
          board: data.data.board
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div>
        {this.state.board.title}
      </div>
    )
  }
}


export default BoardViwer