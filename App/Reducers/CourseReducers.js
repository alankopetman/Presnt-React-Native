import createReducer from '../lib/CreateReducer';
import * as types from '../Actions/ActionTypes';

export const setSections = createReducer({}, {
  [types.SECTION.SUCCESS](state, action){
    return {sections: action.sections}
  }
});

export const setSectionFailure = createReducer({}, {
  [types.SECTION.FAILURE](state, action){
		return { data: action.data, }
  }
});

export const setCourses = createReducer({}, {
  [types.COURSE.SUCCESS](state, action){
    return {courses: action.courses}
  }
});

export const setCourseFailure = createReducer({}, {
  [types.COURSE.FAILURE](state, action){
		return { data: action.data, }
  }
});
