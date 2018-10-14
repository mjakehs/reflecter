//main view of app, routes between different form components 
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FormViewOne from '../FormViews/FormViewOne';
import FormViewTwo from '../FormViews/FormViewTwo';
import FormViewThree from '../FormViews/FormViewThree';
import FormViewFour from '../FormViews/FormViewFour';
import ProgressBar from '../ProgressBar/ProgressBar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class FeedBackFormPage extends Component {

    render() {
        return (
            <Router>
                <div>
                <Paper className={this.props.classes.root}>
                    <ProgressBar />
                    <Route exact path="/feedback" component={FormViewOne} />
                    <Route path="/feedback/2" component={FormViewTwo} />
                    <Route path="/feedback/3" component={FormViewThree} />
                    <Route path="/feedback/4" component={FormViewFour} />
                </Paper>
                </div>
            </Router>
        );
    }
}

export default withStyles(styles)(FeedBackFormPage);