import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//style includes
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

//action includes
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';

/* ONLY UNIQUE FORM VIEW */

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
})

class FormViewFour extends Component {

    state = {
        comment: '',
    }

    handleCommentChange = event => {
        this.props.dispatch({ type: FORM_ACTIONS.ADD_FEEBACK_FOUR, payload: event.target.value });
        this.setState({
            comment: event.target.value,
        })
    }//changes comment value in redux state

    submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: this.props.feedbackForm
        })
            .then(() => {
                //obviosuly this code is clunky -- hopefully learning redux sagas will help :)
                this.props.dispatch({ type: STAGE_ACTIONS.RESTART_STAGE });
                this.props.dispatch({ type: FORM_ACTIONS.CLEAR_FEEDBACK_FORM });
                this.props.history.push('/complete');
            })
            .catch(err => {
                alert('Error posting feedback');
            })
    }//submits feedback to server -> SQL db


    render() {
        return (
            <Card className="feedback-card">
                <CardContent>
                    <h3 clasName="form-header">Any comments you want to leave?</h3>
                    <TextField
                        id="standard-uncontrolled"
                        label="Comments"
                        margin="normal"
                        multiline
                        className="form-select"
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                    />
                    <br></br>
                    <Button type="submit" onClick={this.submitFeedback} variant="contained" color="primary" size="large">
                        Submit
                        <ArrowForward />
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = ({ feedbackForm }) => ({ feedbackForm });

export default withStyles(styles)(withRouter(connect(mapStateToProps)(FormViewFour)));