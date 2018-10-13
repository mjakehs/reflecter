//shows progress through form, takes stepNumber as props
import React, {Component} from 'react';

class ProgressBar extends Component {

    render(){
        return(
            <div>
                <h1>ProgressBar</h1>
                <div className="progress-bar"></div>
            </div>
        );
    }   
}

export default ProgressBar;