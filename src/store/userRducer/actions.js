import * as constants from './constants';


export const LoginUser = data => ({
    type: constants.LOGIN,
    payload: data,
});