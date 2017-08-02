import React from 'react';
import Main from './Main';

import Article from '../et-article';

class Main2 extends React.Component {                                                     
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <Main>
        <div className='inner'>
          <section className='articles'>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </section>
        </div>
      </Main>
    )
  }
}

export default Main2;