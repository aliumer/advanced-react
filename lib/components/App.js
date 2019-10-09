import React from "react";
import DataApi from "../DataApi";
import { data } from "../testData";
import ArticleList from "./ArticleList";
import axios from 'axios';

class App extends React.Component {
  state = {
    articles: {},
    authors: {}
  }
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);
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
