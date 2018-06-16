import React from 'react';
import {render} from 'react-dom';

function HelloWorld() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Intro to React concepts.</h1>
        </header>
      </div>
    );
}

render(<HelloWorld />, document.getElementById('root'));
