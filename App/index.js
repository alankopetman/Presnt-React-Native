import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './Reducers';
import AppContainer from './Containers/AppContainer';


const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});


export default App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
