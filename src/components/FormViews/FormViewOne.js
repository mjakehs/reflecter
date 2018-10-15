import React, {Component} from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

//styles
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//action includes
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';

class FormViewOne extends Component {

    render(){
        return(
            <Card className="feedback-card">
                <CardContent>
                    <FeedbackForm prompt="How are you feeling today?" path="/feedback/2" label="feeling" stageAction={STAGE_ACTIONS.NEXT_STAGE} formAction={FORM_ACTIONS.ADD_FEEBACK_ONE} />
                </CardContent>
            </Card>
        );
    }
}

export default FormViewOne;