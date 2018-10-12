import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import FeedBackFormPage from '../FeedBackFormPage/FeedBackFormPage';
import SubmitCompletePage from '../SubmitCompletePage/SubmitCompletePage';

class App extends Component {
  render() {
    return (
    <Router>
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* Navbar for dev mode only --> will convert to inner app buttons for this routers actions */}
        <ul>
          <li><Link to="/">Feedback Form Page</Link></li>
          <li><Link to="/complete">Submit Complete Page</Link></li>
        </ul>
        <Route exact path="/" component={FeedBackFormPage} />
        <Route  path="/complete" component={SubmitCompletePage} />
      </div>
    </Router>
    );
  }
}

export default App;
