import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Collapsible from 'react-collapsible'

import ViewBoard from 'component/viewBoard'

class BoardList extends Component {

  render() {
    return (
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
            {this.props.boards.map(board => (
              <TableRow onClick={this.viewBoard}>
                <TableCell>{board.id}</TableCell>
                <TableCell>
                  <Collapsible trigger={board.title}>
                    <ViewBoard boardId={board.id}></ViewBoard>
                  </Collapsible>
                </TableCell>
                <TableCell>{board.created_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


export default BoardList