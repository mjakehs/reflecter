//page view displayed on form completeion -- pushes user back to form start.
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });


class SubmitCompletePage extends Component {

    restartFeedbackProcess = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <Button variant="contained" color="primary"  size="large" className={this.props.classes.button} onClick={this.restartFeedbackProcess}>Return to Give Feedback Form</Button>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(SubmitCompletePage));