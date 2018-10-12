import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

class FormViewFour extends Component {

    render(){
        return(
            <div>
                <h1>FormViewFour</h1>
                <FeedBackInput />
                <NextButton />
            </div>
        );
    }
}

export default FormViewFour;