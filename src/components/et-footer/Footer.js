import React from 'react';
import './index.scss';

const linkList = {

}

class Footer extends React.Component {                                                     
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <footer id='footer'>
        <div>
          <ul>
            <li>
              <a href='https://github.com/igoist'>FAQ</a>
            </li>
            <li>
              <a href='https://github.com/igoist'>Github</a>
            </li>
            <li>
              <a href='493512132@qq.com'>Mail</a>
            </li>
            <li>
              <a href='https://github.com/igoist'>Github</a>
            </li>
          </ul>
          <span>© 2017 igoist</span>
        </div>
      </footer>
    )
  }
}

export default Footer;