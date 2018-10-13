//input form to accept feedback
//takes question as props
import React, {Component} from 'react';
import { connect } from 'react-redux';
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';

let SELECTED_ACTION = '';
let propsName = '';

class FeedbackInput extends Component {

    state = {
        prompt: '',
    }

    handleInputChange = event => {
        this.props.dispatch({type: SELECTED_ACTION, payload: event.target.value})
        console.log(propsName);
    }

    selectActionByProps = props => {
        switch(props) {
            case 1:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_ONE;
                propsName = 'feeling';
                this.setState({
                    prompt: 'How are you feeling today?',
                })  
                break;
            case 2:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_TWO;
                propsName = 'comprehension';
                this.setState({
                    prompt: 'How well are you understanding the content?',
                })  
                break;
            case 3:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_THREE;
                propsName = 'support';
                this.setState({
                    prompt: 'How well are you being supported?',
                })  
                break;
        }
    }
    
    componentDidMount() {
        this.selectActionByProps(this.props.stage);
    }

    render(){
        return(
            <div>
                <p className="form-prompt">{this.state.prompt}</p>
                <input type="number" onChange={this.handleInputChange} />
            </div>
        );
    }
}

const mapStateToProps = ({stage}) => ({stage});

export default connect(mapStateToProps)(FeedbackInput);