import React, { Component } from 'react'
import axios from 'axios'


// const AddBoard = () => {
//   return (
//     <div>
//       <input placeholder="title" />
//       <input placeholder="contenxt" />
//       <button onClick={saveBoard()}>저장</button>
//     </div>
//   )
// }


class AddBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content : ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleSubmit() {

  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

  
    this.setState({
      [name] : value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" placeholder="title" onChange={this.handleInputChange}/>
        <input name="content" placeholder="content" onChange={this.handleInputChange}/>
        <button onClick={this._addBoard}>저장</button>
      </form>
    )
  }
}

export default AddBoard