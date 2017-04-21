import { combineReducers } from 'redux';
import createReducer from '../lib/CreateReducer';
import * as LoginReducers from './LoginReducer';
import * as RouteReducers from './RouteReducer';

export default combineReducers(Object.assign(
  LoginReducers,
	RouteReducers,
));
