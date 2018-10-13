//page view displayed on form completeion -- pushes user back to form start.
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SubmitCompletePage extends Component {

    restartFeedbackProcess = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h1>SubmitCompletePage</h1>
                <button onClick={this.restartFeedbackProcess}>Return to Give Feedback Form</button>
            </div>
        );
    }
}

export default withRouter(SubmitCompletePage);