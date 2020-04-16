import React, { Component } from 'react';


class ViewBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content : ''
    }
  }


  render() {
    return (
      <div>
          <p>{this.props.content}</p>
      </div>
    )
  }
}


export default ViewBoard
