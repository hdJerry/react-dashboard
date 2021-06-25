import * as constants from './constants';

let initialState = {};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN:
           return {
               ...state,
               ...action.payload,
           };
    
        default:
            return state;
    }
}


export default userReducer;