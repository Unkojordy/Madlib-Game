import React, { Component } from 'react';

import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="backgroundskew">
         <div className="snake-main-heading">
          <h1>Snake bOi Gang</h1>
            <div className="snake-sub-heading">
                Press the button to start the game.
            </div>
        </div> 
            <MadlibForm />
       </div>
      </div>

    );
  }
}
