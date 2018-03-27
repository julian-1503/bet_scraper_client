/*
 * @flow
 */

import { combineReducers } from 'redux';

import loginReducer from './components/Login/reducers/loginReducer';

const rootReducer = combineReducers({
  ...loginReducer
});

export default rootReducer;
