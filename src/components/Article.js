import React from 'react';

function Article(props) {
  const {article} = props

  const body = <p className="app-title">{article.text}</p>
  return (
    <div className="app">
      <h3>{article.title}</h3>
      {body}
      creation date: {(new Date(article.date)).toDateString()}
    </div>
  );
}

export default Article