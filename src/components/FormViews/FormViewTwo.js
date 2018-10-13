import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

const prompt = 'How well are you understanding the content?';

class FormViewTwo extends Component {

    render(){
        return(
            <div>
                <h1>FormViewTwo</h1>
                <FeedBackInput formNumber={'two'} prompt={prompt}/>
                <NextButton />
            </div>
        );
    }
}

export default FormViewTwo;