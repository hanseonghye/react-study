import React, { Component } from 'react'
import axios from 'axios'
import BoardList from 'container/BoardList'
import AddBoard from 'component/addBoard'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boardList: []
    }
  }
  

  componentDidMount() {
    this._getBoards()
  }


  _getBoards() {
    const apiUrl = 'dummy/boardlist.json'

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          boardList: data.data.boardlist
        })
      })
      .catch(error => {
      console.log(error)
      })
    
  }


  render() {
    return (
      <div>
        <AddBoard></AddBoard>
        <BoardList boards={this.state.boardList}></BoardList>
      </div>
    )
  }
}


export default Main