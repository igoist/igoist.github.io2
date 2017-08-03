import React, { Component } from 'react';

// import Test from './components/et-pagination';
import Header from './components/et-header';
import Main from './components/et-main';
import Footer from './components/et-footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />  
        {/* <Test /> */}
        <Main />
        <Footer />
      </div>
    );
  }
}
