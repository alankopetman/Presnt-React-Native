import * as types from './ActionTypes';
import Api from '../lib/Api';
import axios from 'react-native-axios';

const axiosInstance = axios.create({
  baseURL: 'http://107.170.0.229:8080',
	headers : { 'Content-Type': 'application/json'},
});

export function register(firstName, lastName, pid, email, password, passwordConf) {
  return (dispatch, getState) => {
		const re = new RegExp('\(.*\)@.*');
    console.log(getState());
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
      console.log(response)
      const { data } = response;
      dispatch(loginSuccess({ token: data.key, user: data.user, prof: data.prof }))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}


export function loginRequest(email, password) {
  return (dispatch, getState) => {
    console.log(getState());
		const re = new RegExp('\(.*\)@.*');
    console.log(getState());
    axiosInstance.post('/api/auth/v2/login/', {
			username: email.replace(re, '$1'),
			email: email,
      password: password,
    })
    .then((response) => {
      console.log(response)
      const { data } = response;
      dispatch(loginSuccess({ token: data.key, user: data.user, prof: data.prof }))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function loginSuccess({token, user}) {
  return {
    type: types.LOGIN.SUCCESS,
    token,
    user,
  }
}

export function loginFailure(err) {
  return {
    type: types.LOGIN.FAILURE,
    err,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}
