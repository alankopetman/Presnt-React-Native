import createReducer from '../lib/CreateReducer';
import * as types from '../Actions/ActionTypes';

export const setPath = createReducer({}, {
  [types.ROUTE.PATH](state, action){
    return {path: action.path}
  }
});
