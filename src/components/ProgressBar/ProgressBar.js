//shows progress through form, takes stepNumber as props
import React, {Component} from 'react';
import { connect } from 'react-redux';

const progressFillerFunction = () => {
    return <div className="progress-filler"></div>
}

class ProgressBar extends Component {

    state = {
        progressArray: [],
    }

    ProgressFiller = () => {
        for(let i = 1; i <= this.props.stage; i++){
            this.setState({
                progressArray: [
                    ...this.state.progressArray,
                    progressFillerFunction,
                ]
            })
        }
    }

    componentWillReceiveProps() {
        this.ProgressFiller();
    }

    render(){
        return(
            <div className="progress-bar-div">
                <h4>{this.props.stage} of 4 pages</h4>
                <div className="progress-bar">
                    <div className="progress-filler"></div>
                    {this.state.progressArray.map(filler => filler())}
                </div>
            </div>
        );
    }   
}

const mapStateToProps = ({stage}) => ({stage});

export default connect(mapStateToProps)(ProgressBar);