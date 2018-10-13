//button that adds form value to state
//takes path of next view and redux action as props
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

let nextPath = '';

class NextButton extends Component {

    handleNextAction = () => {
        this.props.history.push(nextPath)
    }
    
    setPath = props => {
        switch(props) {
            case 'one':
                nextPath = '/feedback/2';
                break;
            case 'two':
                nextPath = '/feedback/3';
                break;
            case 'three':
                nextPath = '/feedback/4';
                break;
            case 'four':
                nextPath = '/complete';
                break;
        }
    }

    componentDidMount(){
        this.setPath(this.props.nextPath);
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

export default withRouter(NextButton);