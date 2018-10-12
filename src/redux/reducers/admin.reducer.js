import ADMIN_ACTIONS from '../actions/ADMIN_ACTIONS';


const admin = (state = [], action) => {
    switch(action.type){
        case ADMIN_ACTIONS.SET_FEEDBACK_HISTORY:
            return state = [...action.payload];
        default:
            return state;
    }
}

export default admin;