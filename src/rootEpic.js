/*
 * @flow
 */

import { combineEpics } from 'redux-observable';
import loginEpics from './components/Login/epics/';

export default combineEpics(
  loginEpics
);
