import React from 'react';
import Article from "./Article";

export default function ArticleList({ articles }) {
  const articleElements = articles.map(article =>
    // key will be local
    <li key={article.id}><Article article={article}/></li>
  )
  return(
    <ul>
      {articleElements}
    </ul>
  )
}