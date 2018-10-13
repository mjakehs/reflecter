//should include a table with previous feedback in it
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ADMIN_ACTIONS from '../../redux/actions/ADMIN_ACTIONS';

class Admin extends Component {

    setFeedback = () => {
        axios.get('/api/feedback')
        .then(response => {
            this.props.dispatch({type: ADMIN_ACTIONS.SET_FEEDBACK_HISTORY, payload: response.data})
        })
        .catch(err => {
            console.log(err);
            alert('Error getting feedback from database.');
        })
    }

    componentDidMount() {
        this.setFeedback();
    }

    render(){
        return(
            <div className="admin">
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.feedbackHistory.map(feedback => {
                            return <FeedbackItem setFeedback={this.setFeedback} feedback={feedback} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect()(Admin);