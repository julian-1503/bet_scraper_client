/*
 * @flow
 */
import {
  actionTypes,
} from '../actions/';

import get from 'lodash/get';

type loggedInDetailsType = {
  token: string,
  member: memberType
}

type initialStataType = {
  isLoggedIn: boolean,
  loggedInDetails: loggedInDetailsType
}

const initialState : initialStataType = {
  isLoggedIn: false,
  loggedInDetails: {
    token: '',
    member: {
      _id: '',
      email: '',
      name: '',
      cellPhone: '',
      tags: [],
      role: '',
      notes: [],
    }
  }
};

const loginReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload
      };
    case actionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loggedInUser: action.payload
      };
    default:
      return state;
  }
};

const reducerStoreKey = 'LoginInformation';

export default {
  [reducerStoreKey]: loginReducer
};


/*
 * Selectors
 */
const getState = (state: Object) => get(state, [reducerStoreKey], {});

export const isLoggedIn : (state: Object) => boolean = state => (
  get(getState(state), [ 'isLoggedIn' ])
);
