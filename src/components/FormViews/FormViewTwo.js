import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';

class FormViewTwo extends Component {

    render(){
        return(
            <Card className="feedback-card">
                <CardContent>
                    <FeedbackForm prompt="How well are you understanding the content?" path="/feedback/3" label="comprehension" stageAction={STAGE_ACTIONS.NEXT_STAGE} formAction={FORM_ACTIONS.ADD_FEEBACK_TWO} />
                </CardContent>
            </Card>
        );
    }
}

export default FormViewTwo;