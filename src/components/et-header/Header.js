import React from 'react';
import './index.scss';

class Header extends React.Component {                                                     
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <header id='header'>
        <div id='banner'></div>
        <div id='mask'></div>
        <nav>
          <h1>adsad</h1>
        </nav>
      </header>
    )
  }
}

export default Header;