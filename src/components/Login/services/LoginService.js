/*
 * @flow
 */

import axios from 'axios';
import { API_URL } from '../../../common/serviceConstants';

const LOGIN_URI : string = '/login';

export const login : (form: LoginFormType) => Object = form => axios
  .post(`${API_URL}${LOGIN_URI}`, form)
