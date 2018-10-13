import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

const prompt = 'How are you feeling today?';

class FormViewOne extends Component {

    render(){
        return(
            <div>
                <h1>FormViewOne</h1>
                <FeedBackInput formNumber={'one'} prompt={prompt} />
                <NextButton />
            </div>
        );
    }
}

export default FormViewOne;