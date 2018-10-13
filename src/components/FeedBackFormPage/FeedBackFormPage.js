//main view of app, routes between different form components 
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FormViewOne from '../FormViews/FormViewOne';
import FormViewTwo from '../FormViews/FormViewTwo';
import FormViewThree from '../FormViews/FormViewThree';
import FormViewFour from '../FormViews/FormViewFour';
import ProgressBar from '../ProgressBar/ProgressBar';


class FeedBackFormPage extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ProgressBar />
                    <Route exact path="/feedback" component={FormViewOne} />
                    <Route path="/feedback/2" component={FormViewTwo} />
                    <Route path="/feedback/3" component={FormViewThree} />
                    <Route path="/feedback/4" component={FormViewFour} />
                </div>
            </Router>
        );
    }
}

export default FeedBackFormPage;