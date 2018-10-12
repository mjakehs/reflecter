import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

class FormViewThree extends Component {

    render(){
        return(
            <div>
                <h1>FormViewThree</h1>
                <FeedBackInput />
                <NextButton />
            </div>
        );
    }
}

export default FormViewThree;