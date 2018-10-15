import STAGE_ACTIONS from '../actions/STAGE_ACTIONS';

const stage = (state = 1, action) => {
    switch(action.type) {
        case STAGE_ACTIONS.NEXT_STAGE:
            return state = state + 1;
        case STAGE_ACTIONS.RESTART_STAGE:
            return 1;
        default:
            return state;
    
    }
}//handles the stage of the form completion to project to progress bar

export default stage;