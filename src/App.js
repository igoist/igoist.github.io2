import React, { Component } from 'react';

import Test from './components/et-pagination';
import Header from './components/et-headers';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />  
        <Test />
      </div>
    );
  }
}
