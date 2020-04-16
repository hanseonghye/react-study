import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ViewBoard from 'component/viewBoard'
import axios from 'axios'

class BoardList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content : ''
    }
  }


  _viewBoard = () => {
    // const apiUrl = 'http://localhost:8080/boards/' + this.props.boardId
    const apiUrl = 'dummy/board.json'

    axios.get(apiUrl)
      .then(data => {
        this.setState(() => ( {content : data.data.board.content}))
      })
      .catch(error => {
      console.log(error)
      })
  }


  render() {
    return (
      <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>글쓴날</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.boards.map((board, index) => (
              <TableRow onClick={this._viewBoard} key={index}>
                <TableCell>{board.id}</TableCell>
                <TableCell>{board.title}</TableCell>
                <TableCell>{board.created_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <ViewBoard content={this.state.content}></ViewBoard>
      </div>
    )
  }
}


export default BoardList
