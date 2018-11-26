import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxMulti from './reduxMulti';
import enhancedState from './enhancedState';

import appReducer from '../app/appReducer';

const reducer = combineReducers({
  app: appReducer,
});

const middleware = applyMiddleware(thunk, reduxMulti);

export default middleware(createStore)(reducer, enhancedState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());