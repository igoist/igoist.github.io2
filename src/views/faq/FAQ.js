import React, { Component } from 'react';

// import Footer from './components/et-footer';
import './index.scss';

class Header extends Component {
  render() {
    return (
      <header id='header'>
        FAQ of igoist's blog
      </header>
    );
  }
}

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main id='main'>
          <aside className='sidebar'>
            <ul className='menu'>
              {
                [1, 2, 3, 4, 5, 6].map((v) => {
                  return (
                    <li key={v.toString()} className='submenu'>
                      <div className='submenu-title'>AAA{v}</div>
                      <ul className='menu-sub'>
                        <li className='menu-sub-item' data-url='/doc/type1/doc1'>
                          用户手册{v}{v}{v}{v}
                        </li>
                        <li className='menu-sub-item' data-url='/doc/type1/doc2'>
                          用户手册{v}{v}{v}{v}
                        </li>
                        <li className='menu-sub-item' data-url='/doc/type2/doc1'>
                          用户手册{v}{v}{v}{v}
                        </li>
                        <li className='menu-sub-item' data-url='/doc/type2/doc2'>
                          用户手册{v}{v}{v}{v}
                        </li>
                        <li className='menu-sub-item' data-url='/doc/type1/doc1'>
                          用户手册{v}{v}{v}{v}
                        </li>
                        <li className='menu-sub-item' data-url='/doc/type1/doc1'>
                          用户手册{v}{v}{v}{v}
                        </li>
                      </ul>
                    </li>
                  );
                })
              }
            </ul>
          </aside>
          <div className='content-wrap'>
            <section className='markdown'>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
