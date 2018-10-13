import FORM_ACTIONS from '../actions/FORM_ACTIONS';

const feedbackForm  = (state = {feeling: '', comprehension: '', supported:'', comments: ''}, action) => {
    switch(action.type){
        case FORM_ACTIONS.ADD_FEEBACK_ONE:
            return {...state, feeling: action.payload};
        case FORM_ACTIONS.ADD_FEEBACK_TWO:
            return {...state, comprehension: action.payload};
        case FORM_ACTIONS.ADD_FEEBACK_THREE:
            return {...state, supported: action.payload};
        case FORM_ACTIONS.ADD_FEEBACK_FOUR:
            return {...state, comments: action.payload};
        case FORM_ACTIONS.CLEAR_FEEDBACK_FORM:
            return {feeling: '', comprehension: '', supported:'', comments: ''};
        default:
            return state;
    }
}

export default feedbackForm;