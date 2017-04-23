const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const PATH = 'PATH';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

function createRouteTypes(base) {
  const res = {};
  [PATH].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = 'LOGOUT';

export const ROUTE = createRouteTypes('ROUTE');
export const COURSE = createRequestTypes('COURSE');
export const SECTION = createRequestTypes('SECTION');
