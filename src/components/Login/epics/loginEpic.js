
/*
 * @flow
 */

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import {
  actionCreators,
  actionTypes,
} from '../actions/';
import { login } from '../services/LoginService';

const loginEpic = (action$ : Object) => action$
  .ofType(actionTypes.LOGIN_REQUEST)
  .pluck('payload')
  .switchMap((form: LoginFormType) => Observable
    .fromPromise(login(form))
    .map((response: Object) => actionCreators.loginSuccess(response.data.data))
    .catch((error: Object) => Observable.of(actionCreators.loginFail(error)))
  );

export default loginEpic;
