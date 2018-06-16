import React from 'react';
import {render} from 'react-dom';

function Article() {
  const body = <p className="app-title">Lorum Ipsum dolorum</p>
    return (
      <div className="app">
        <h3>Article title</h3>
        {body}
        creation date: {(new Date()).toDateString()}
      </div>
    );
}

function App() {
  return (
    <div>
      <h1 className="App-header">
        Intro to React concepts.
      </h1>
      <Article/>
    </div>
  );
}
render(<App />, document.getElementById('root'));
