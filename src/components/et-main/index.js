import React from 'react';
import MainX from './Main';

import Article from '../et-article';

const articles = [
  {
    theme: '随便什么themes',
    title: '随便什么Primary Tags',
    content: '随便什么Any post in Ghost can have multiple tags, but Ghost also pays attention to the order of those tags. The first tag entered is considered the most important, and is treated as a',
    avator: 'https://www.baidu.com/',
    author: 'igoist'
  },
  {
    theme: 'themes',
    title: 'Primary Tags',
    content: 'Any post in Ghost can have multiple tags, but Ghost also pays attention to the order of those tags. The first tag entered is considered the most important, and is treated as a',
    avator: 'https://www.baidu.com/',
    author: 'John O\'Nolan'
  },
  {
    theme: 'releases',
    title: 'Ghost 1.0.0 - React, redux and redis??',
    content: 'jk lol 🤓 here\'s what really happened... Ghost 1.0.0 is now available on GitHub, npm and Ghost.org. No seriously. It\'s done! In fact... there\'s a 1.0.2 😬! Highlights [New] Editor,',
    avator: '//hbimg-dev.b0.upaiyun.com/14d278d832199399c473b0673edcc7614fd1b1ac',
    author: 'Hannah Wolfe'
  },
]

class Main extends React.Component {
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <MainX>
        <div className='inner'>
          <section className='articles'>
            {
              articles.map((v, i) => {
                return <Article key={'article' + i.toString()} obj={v} />
              })
            }
            <Article />
            <Article />
            <Article />
          </section>
        </div>
      </MainX>
    )
  }
}

export default Main;