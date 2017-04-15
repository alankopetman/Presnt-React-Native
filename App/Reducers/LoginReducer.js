import createReducer from '../lib/CreateReducer';
import * as types from '../Actions/ActionTypes';

export const setUser = createReducer({}, {
  [types.LOGIN.SUCCESS](state, action){
    return {token: action.token, user: action.user}
  }
});

export const LoginReducer = createReducer({}, {
  [types.LOGIN.REQUEST](state, action){
    return {token: action.token, user: action.user}
  }
});
