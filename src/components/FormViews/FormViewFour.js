import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

const prompt = 'Any Comments you want to leave?';

class FormViewFour extends Component {

    render(){
        return(
            <div>
                <h1>FormViewFour</h1>
                <FeedBackInput formNumber={'four'} prompt={prompt} />
                <NextButton nextPath={'four'} />
            </div>
        );
    }
}

export default FormViewFour;