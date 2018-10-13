import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//action includes
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';


class FormViewFour extends Component {

    handleCommentChange = event => {
        this.props.dispatch({type: FORM_ACTIONS.ADD_FEEBACK_FOUR, payload: event.target.value});
    }

    submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: this.props.feedbackForm
        })
        .then(() => {
            //obviosuly this code is clunky -- hopefully learning redux sagas will help :)
            this.props.dispatch({type: STAGE_ACTIONS.RESTART_STAGE});
            this.props.dispatch({type: FORM_ACTIONS.CLEAR_FEEDBACK_FORM});
            this.props.history.push('/complete');
        })
        .catch(err => {
            console.log(err);
            alert('Error posting feedback');
        })
    }


    render(){
        return(
            <div>
                <p>Any comments you want to leave?</p>
                <input type="text" onChange={this.handleCommentChange} />
                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = ({feedbackForm}) => ({feedbackForm});

export default withRouter(connect(mapStateToProps)(FormViewFour));