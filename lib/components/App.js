import React from "react";
import DataApi from "../DataApi";
import ArticleList from "./ArticleList";
import axios from 'axios';

class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  // Lookup Authors.
  articleActions = {
    lookupAuthor: autherId => this.state.authors[autherId]
  };

  render() {
    debugger;
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
