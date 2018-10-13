import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//include sub-views
import FeedBackFormPage from '../FeedBackFormPage/FeedBackFormPage';
import SubmitCompletePage from '../SubmitCompletePage/SubmitCompletePage';
import Admin from '../Admin/Admin';


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
        <Route path="/admin" component={Admin} />
        {/* Navbar for dev mode only --> will convert to inner app buttons for this routers actions */}
        <ul>
          <li><Link to="/feedback">Feedback Form Page</Link></li>
          <li><Link to="/complete">Submit Complete Page</Link></li>
        </ul>
        <Route  path="/feedback" component={FeedBackFormPage} />
        <Route  path="/complete" component={SubmitCompletePage} />
        <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
      </div>
    </Router>
    );
  }
}

const mapStateToProps = reduxState => ({reduxState});

export default connect(mapStateToProps)(App);
