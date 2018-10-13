//button that adds form value to state
//takes path of next view and redux action as props
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';

let nextPath = '';

class NextButton extends Component {

    handleNextAction = () => {
        this.props.history.push(nextPath)
        this.props.dispatch({type: STAGE_ACTIONS.NEXT_STAGE})
    }
    
    setPath = props => {
        switch(props) {
            case 1:
                nextPath = '/feedback/2';
                break;
            case 2:
                nextPath = '/feedback/3';
                break;
            case 3:
                nextPath = '/feedback/4';
                break;
            case 4:
                nextPath = '/complete';
                break;
        }
    }

    componentDidMount(){
        this.setPath(this.props.stage);
    }

    render(){
        return(
            <div>
                <h1>NextButton</h1>
                <button onClick={this.handleNextAction}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = ({stage}) => ({stage});

export default withRouter(connect(mapStateToProps)(NextButton));