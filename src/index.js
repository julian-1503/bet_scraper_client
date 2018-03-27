/*
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const { store, persistor  } = configureStore();

const ReduxApp = () => (
  <div>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={null}
      >
        <div>
          <App/>
        </div>
      </PersistGate>
    </Provider>
  </div>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
