import React from 'react';
import Article from "../Article";
import './style.css'

export default function ArticleList({ articles }) {
  const articleElements = articles.map(article =>
    // key will be local
    <li key={article.id} className='article-list__list__li'>
      <Article article={article}/>
    </li>
  )
  return(
    <ul>
      {articleElements}
    </ul>
  )
}