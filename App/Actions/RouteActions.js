import * as types from './ActionTypes';
import Api from '../lib/Api';

export function routeTo(path) {
  return {
    type: types.ROUTE.PATH,
		path, 
  }
}
