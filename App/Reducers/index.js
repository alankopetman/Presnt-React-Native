import { combineReducers } from 'redux';
import createReducer from '../lib/CreateReducer';
import * as LoginReducers from './LoginReducer';


const initialNavState = {
	index: 1,
	routes: [
		{ key: 'InitA', routeName: 'Home' },
	],
};

const initialAuthState = { isLoggedIn: false };

const nav = (state = initialNavState, action) => {
	switch(action.type) {
		case 'LOGIN_SUCCESS':
			return AppNavigator.router.getStateForAction(NavigationActions.back(), state)
		default:
			return AppNavigator.router.getStateForAction(action, state)
	}
};

export default combineReducers(Object.assign(
  LoginReducers,
));
