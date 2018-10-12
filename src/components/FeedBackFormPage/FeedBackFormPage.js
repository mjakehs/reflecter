//main view of app, routes between different form components 
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FormViewOne from '../FormViews/FormViewOne';
import FormViewTwo from '../FormViews/FormViewTwo';
import FormViewThree from '../FormViews/FormViewThree';
import FormViewFour from '../FormViews/FormViewFour';


class FeedBackFormPage extends Component {

    render() {
        return (
            <Router>
                <div>
                    <h1>FeedBackFormPage</h1>
                    <ol>
                        <li><Link to="/feedback/1">Form View One</Link></li>
                        <li><Link to="/feedback/2">Form View Two</Link></li>
                        <li><Link to="/feedback/3">Form View Three</Link></li>
                        <li><Link to="/feedback/4">Form View Four</Link></li>
                    </ol>
                    <Route path="/feedback/1" component={FormViewOne} />
                    <Route path="/feedback/2" component={FormViewTwo} />
                    <Route path="/feedback/3" component={FormViewThree} />
                    <Route path="/feedback/4" component={FormViewFour} />
                </div>
            </Router>
        );
    }
}

export default FeedBackFormPage;