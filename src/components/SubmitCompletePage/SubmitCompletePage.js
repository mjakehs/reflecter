//page view displayed on form completeion -- pushes user back to form start.
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class SubmitCompletePage extends Component {

    restartFeedbackProcess = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header className="Complete-Header">
                    <h1>Thank You!</h1>
                </header>
                <Card class="final-feedback-card">
                    <CardContent id="reset">
                        <Button variant="contained" color="primary" size="large" onClick={this.restartFeedbackProcess}>Give Another Feedback</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withRouter(SubmitCompletePage);