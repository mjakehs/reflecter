//used as return for map function in Admin component
import React, {Component} from 'react';
import axios from 'axios';

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
            <tr className="feedback-row" key={this.props.feedback.id}>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={() => this.deleteFeedback(this.props.feedback.id)}>Delete</button></td>
            </tr>  
        );
    }
}

export default Admin;