import React from "react";
import DataApi from "../DataApi";
import { data } from "../testData";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthers()
    };
  }
  // Lookup Authors.
  articleActions = {
    lookupAuthor: autherId => this.state.authors[autherId]
  }


  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
