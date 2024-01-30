import { IINCREASE, DECREASE, RESET } from "../Actions/ActionTypes";

const initialState = 0;

const counterReducer = (state = initialState, Action) => {
 
        switch(Action.type){
            case IINCREASE:
                return state + Action.value;
            case DECREASE:
                return state - Action.value;
            case RESET:
                return 0;
            default:
                return Action.value;
        }
    

};

export default counterReducer;