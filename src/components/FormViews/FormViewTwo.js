import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

class FormViewTwo extends Component {

    render(){
        return(
            <div>
                <h1>FormViewTwo</h1>
                <FeedBackInput />
                <NextButton />
            </div>
        );
    }
}

export default FormViewTwo;