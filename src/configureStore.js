/*
 * @flow
 */

import { ajax } from 'rxjs/observable/dom/ajax';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';

const persistReducerConfig = {
  key: 'root',
  storage
};

const persistedReducer : Object = persistReducer(
  persistReducerConfig,
  rootReducer
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware : Object = createEpicMiddleware(rootEpic, {
  dependencies: { getJSON: ajax.getJSON }
});

export default function configureStore() : Object {
  const initialState = {};

  const enhancers = composeEnhancers(applyMiddleware(epicMiddleware));

  const store = createStore(persistedReducer, initialState, enhancers);
  const persistor = persistStore(store);

  return { store, persistor };
}
