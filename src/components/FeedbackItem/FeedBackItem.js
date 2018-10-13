//used as return for map function in Admin component
import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const feedback = this.props.feedback;

class Admin extends Component {

    deleteFeedback = id => {
        axios({
            method: 'DELETE',
            url: '/api/feedback',
            params: {
                id: id,
            }
        })
        .then(() => {
            this.props.setFeedback();
        })
        .catch(err => {
            console.log(err);
            alert('Error deleting feedback from database.');
        })
    }

    render(){
        return(
            <tr className="feedback-row">
                <td>{feedback.feeling}</td>
                <td>{feedback.comprehension}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={() => this.deleteFeedback(feedback.id)}>Delete</button></td>
            </tr>  
        );
    }
}

mapStateToProps = ({ admin }) => ({feedback: admin})

export default connect(mapStateToProps)(Admin);