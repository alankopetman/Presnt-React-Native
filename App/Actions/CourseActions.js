import * as types from './ActionTypes';
import axios from 'react-native-axios';

const axiosInstance = axios.create({
  baseURL: 'http://107.170.0.229:8080',
	headers : { 'Content-Type': 'application/json'},
	validateStatus: function(status) {
		return status < 500;
	}
});

export function deleteSection(auth, sectionId) {
	const { user, token } = auth;
	axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
	console.log(axiosInstance.defaults.headers.common['Authorization'])
	return (dispatch, getState) => {
		axiosInstance.delete(`/api/sections/${sectionId}/`)
		.then((response) => {
			const { data } = response;
			if(response.status < 400) {
				dispatch(
					getSections({ 
						user: user,
						token: token,
					})
				)
			} else {
				dispatch(
						sectionFailure({
							data: data,
					})
				)
			}
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function createSection(auth, section) {
	const { user, token } = auth;
	axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
	console.log(axiosInstance.defaults.headers.common['Authorization'])
  return (dispatch, getState) => {
    console.log(getState());
		axiosInstance.post('/api/sections/', {
			class_day_one: section.firstDay,
			class_day_two: section.secondDay,
			class_day_three: section.thirdDay,
			class_time: section.classTime,
			class_time_end: section.classTimeEnd,
			room_size: section.roomSize,
			room_number: section.roomNumber,
			router: 'test_router',
			section_id: section.sectionId,
			professor: user,
			course: section.course,
			roster: [],
    })
    .then((response) => {
			const { data } = response;
			if(response.status < 400) {
				dispatch(
					getSections({ 
						user: user,
						token: token,
					})
				)
			} else {
				dispatch(
						sectionFailure({
							data: data,
					})
				)
			}
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function getSections(auth) {
	const { token, user } = auth;
	axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
	console.log(axiosInstance.defaults.headers.common['Authorization'])
	return (dispatch, getState) => {
		axiosInstance.get('/api/sections/get_sections/')
		.then((response) => {
			console.log(response)
			if(response.status < 400) {
				dispatch(
					sectionSuccess({
						sections: response.data,
					})
				)
			} else {
				dispatch(
					sectionFailure({
						data: data,
					})
				)
			}
		})
	}
}

export function getCourses(auth) {
	const { token, user } = auth;
	axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
	return (dispatch, getState) => {
		axiosInstance.get(
			'/api/courses/'
		).then((response) => {
			console.log("COURSES GET", response);
			dispatch(
				courseSuccess({
					courses: response.data,
				})
			)
		});
	}
}

export function courseSuccess({ courses }) {
  return {
    type: types.COURSE.SUCCESS,
		courses,
  }
}

export function courseFailure(data) {
  return {
    type: types.COURSE.FAILURE,
		data,
  }
}

export function sectionFailure(data) {
  return {
    type: types.SECTION.FAILURE,
		data,
  }
}

export function sectionSuccess({sections}) {
  return {
    type: types.SECTION.SUCCESS,
		sections,
  }
}

