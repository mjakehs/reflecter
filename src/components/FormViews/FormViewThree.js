import React, {Component} from 'react';
import FeedBackInput from '../Shared/FeedbackInput';
import NextButton from '../Shared/NextButton';

const prompt = 'How well are you being supported?';

class FormViewThree extends Component {

    render(){
        return(
            <div>
                <h1>FormViewThree</h1>
                <FeedBackInput formNumber={'three'} prompt={prompt} />
                <NextButton nextPath={'three'} />
            </div>
        );
    }
}

export default FormViewThree;