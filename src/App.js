/*
 * @flow
 */

import React, { Component } from 'react';
import './App.css';
import DashboardContainer from './components/Dashboard/DashboardContainer';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <DashboardContainer/>
      </div>
    );
  }
}

export default App;
