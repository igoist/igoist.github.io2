import React from 'react';
import './index.scss';

class Main extends React.Component {                                                     
  constructor(props) {                                                                    
    super(props);                                                                         
  }

  render() {
    return (
      <main id='main' className='outer'>
        {this.props.children}
      </main>
    )
  }
}

export default Main;