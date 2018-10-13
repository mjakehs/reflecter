//input form to accept feedback
//takes question as props
import React, {Component} from 'react';
import { connect } from 'react-redux';
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';

let SELECTED_ACTION = '';
let propsName = '';

class FeedbackInput extends Component {

    handleInputChange = event => {
        this.props.dispatch({type: SELECTED_ACTION, payload: event.target.value})
        console.log(propsName);
    }

    selectActionByProps = props => {
        switch(props) {
            case 'one':
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_ONE;
                propsName = 'feeling';
                break;
            case 'two':
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_TWO;
                propsName = 'comprehension';
                break;
            case 'three':
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_THREE;
                propsName = 'support';
                break;
            case 'four':
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_FOUR;
                propsName = 'comments';
                break;
        }
    }
    
    componentDidMount() {
        this.selectActionByProps(this.props.formNumber);
    }

    render(){
        return(
            <div>
                <h1>FeedbackInput</h1>
                <p className="form-prompt">{this.props.prompt}</p>
                <input type="number" onChange={this.handleInputChange} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return({
        feedbackValue: reduxState.feedbackForm[propsName],
    });
};

export default connect(mapStateToProps)(FeedbackInput);