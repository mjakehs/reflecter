import STAGE_ACTIONS from '../actions/STAGE_ACTIONS';

const stage = (state = 1, action) => {
    switch(action.type) {
        case STAGE_ACTIONS.NEXT_STAGE:
            return state = state + 1;
            break;
        case STAGE_ACTIONS.RESTART_STAGE:
            return 1;
            break;
        default:
            return state;
    
    }
}

export default stage;