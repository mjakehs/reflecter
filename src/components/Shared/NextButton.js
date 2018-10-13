//button that adds form value to state
//takes path of next view and redux action as props
import React, {Component} from 'react';
import { connect } from 'react-redux';

class NextButton extends Component {

    handleNextAction = () => {
        console.log(this.props.form);
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

const mapStateToProps = ({form}) => ({form});

export default connect(mapStateToProps)(NextButton);