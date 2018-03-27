/*
 * @flow
 */

import * as actionTypes from './actionTypes';

export const login: (form: LoginFormType) => BasicActionType = form => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: form
});

export const loginSuccess: (response: Object) => BasicActionType = response => ({
  type: actionTypes.LOGIN_REQUEST_SUCCESS,
  payload: response
});

export const loginFail: (error: Object) => BasicActionType = error => ({
  type: actionTypes.LOGIN_REQUEST_FAIL,
  payload: error
});
