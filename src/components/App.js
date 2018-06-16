import React from 'react';
// import Article from './Article'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className="">
          Intro to React concepts.
        </h1>
      </div>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App