import createReducer from '../lib/CreateReducer';
import * as types from '../Actions/ActionTypes';

export const setUser = createReducer({}, {
  [types.LOGIN.SUCCESS](state, action){
    return {token: action.token, user: action.user, prof: action.prof}
  }
});

export const setFailure = createReducer({}, {
  [types.LOGIN.FAILURE](state, action){
		return {
			email: action.email,
			password: action.password,
			other: action.other,
		}
  }
});

export const LoginReducer = createReducer({}, {
  [types.LOGIN.REQUEST](state, action){
    return {token: action.token, user: action.user}
  }
});
