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
        <div id='vertical'>
          <div >
            <h1>花瓣大前端团队博客</h1>
            <h2>技术宅改变世界！跬步千里，记录思考、总结。</h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;