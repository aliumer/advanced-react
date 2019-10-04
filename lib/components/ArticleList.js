import React from 'react';
import Article from './Article';


const ArticleList = (props) => {
  // for each article in props render an article component.
  const {articles, articleActions} = props;
  return (
    Object.values(articles).map(article => 
      <Article
        key={article.id}
        article={article}
        actions={articleActions}
      />
      )
  );
}

export default ArticleList;