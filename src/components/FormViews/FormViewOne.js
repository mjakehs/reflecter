import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

class FormViewOne extends Component {

    render(){
        return(
            <div>
                <h1>FormViewOne</h1>
                <FeedBackInput />
                <NextButton />
            </div>
        );
    }
}

export default FormViewOne;