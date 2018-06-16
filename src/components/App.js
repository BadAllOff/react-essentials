import React from 'react';
// import Article from './Article'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App() {
  return (
    <div>
      <h1 className="App-header">
        Intro to React concepts.
      </h1>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App