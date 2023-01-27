import { ActionTypes } from "./actionTypes"
const INTIALSTATE = {
    carditems: [],
}

export const cardReducer = (state = INTIALSTATE, action) => {
    switch (action.type) {
        case ActionTypes.START_APP:
            return[...action.payload]
        default:
            return state;
    }

}