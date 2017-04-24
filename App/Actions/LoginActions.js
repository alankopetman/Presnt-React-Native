import * as types from './ActionTypes';
import axios from 'react-native-axios';

const axiosInstance = axios.create({
  baseURL: 'http://107.170.0.229:8080',
	headers : { 'Content-Type': 'application/json'},
	validateStatus: function(status) {
		return status < 500;
	}
});

export function register(firstName, lastName, pid, email, password, passwordConf) {
  return (dispatch, getState) => {
		const re = new RegExp('\(.*\)@.*');
		axiosInstance.post('/api/auth/v2/registration/', {
			username: email.replace(re, '$1'),
			email: email,
			password1: password,
			password2: passwordConf,
			first_name: firstName,
			last_name: lastName,
			pid: pid, 
    })
    .then((response) => {
			const { data } = response;
			if(response.status < 400) {
				dispatch(
					loginSuccess({ 
						token: data.key,
						user: data.user,
						prof: data.prof 
					})
				)
			} else {
				dispatch(
						registrationFailure({
						password: data.password,
						email: data.email,
						pid: data.pid,
						other: data.non_field_errors,
					})
				)
			}
    })
    .catch((error) => {
      console.log(error)
    })
  }
}


export function loginRequest(email, password) {
  return (dispatch, getState) => {
		const re = new RegExp('\(.*\)@.*');
		const username = email.replace(re, '$1');
		axiosInstance.post('/api/auth/v2/login/', {
			username: username,
			email: email,
      password: password,
    })
    .then((response) => {
			const { data } = response;
			if(response.status < 400) {
				dispatch(
					loginSuccess({ 
						token: data.key,
						user: data.user,
						prof: data.prof 
					})
				)
			} else {
				dispatch(
					loginFailure({
						password: data.password,
						email: data.email,
						other: data.non_field_errors,
					})
				)
			}
    })
    .catch((error) => {
			console.log(error)
      dispatch(loginFailure(error))
    })
  }
}

export function loginSuccess({token, user, prof}) {
  return {
    type: types.LOGIN.SUCCESS,
    token,
    user,
		prof,
  }
}

export function loginFailure({email, password, other}) {
  return {
    type: types.LOGIN.FAILURE,
    email,
    password,
		other,
  }
}

export function registrationFailure({email, password, pid, other}) {
  return {
    type: types.LOGIN.FAILURE,
    email,
    password,
		pid, 
		other,
  }
}

export function logout() {
	const user = undefined;
	const token = undefined;
	const prof = false;
  return {
		type: types.LOGIN.SUCCESS,
		user, 
		token,
		prof,
  }
}
