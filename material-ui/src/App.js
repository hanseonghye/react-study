import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from "container/Main"
import BoardViwer from "container/BoardViwer"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
          <Route path="/board/:id" component={BoardViwer} />
        </div>
      </Router>
    )
  }
}


export default App;
