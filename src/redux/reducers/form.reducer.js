import { combineReducers } from 'redux';
import FORM_ACTIONS from '../actions/FORM_ACTIONS';

const feeling = (state = '', action) => {
    switch(action.type){
        case FORM_ACTIONS.ADD_FEEBACK_ONE:
            return action.payload;
        case FORM_ACTIONS.CLEAR_FEEDBACK_FORM:
            return '';
        default:
            return state;
    }
}

const comprehension = (state = '', action) => {
    switch(action.type){
        case FORM_ACTIONS.ADD_FEEBACK_TWO:
            return action.payload;
        case FORM_ACTIONS.CLEAR_FEEDBACK_FORM:
            return '';
        default:
            return state;
    }
}

const support = (state = '', action) => {
    switch(action.type){
        case FORM_ACTIONS.ADD_FEEBACK_THREE:
            return action.payload;
        case FORM_ACTIONS.CLEAR_FEEDBACK_FORM:
            return '';
        default:
            return state;
    }
}

const comments = (state = '', action) => {
    switch(action.type){
        case FORM_ACTIONS.ADD_FEEBACK_FOUR:
            return action.payload;
        case FORM_ACTIONS.CLEAR_FEEDBACK_FORM:
            return '';
        default:
            return state;
    }
}

const feedbackForm = combineReducers({
    feeling,
    comprehension,
    support,
    comments,
})

export default feedbackForm;