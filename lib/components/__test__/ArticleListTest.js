import React from "react";
import ArticleList from "../ArticleList";

import renderer from "react-test-rederer";

describe('ArticleList', () => {


  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'}
    },
    articleActions: {
      lookupAuther: jest.fn(()=>({}))
    }
  }

  it('rederes correctly', () => {
    const tree = renderer.create(
      <ArticleList 
        {...testProps}
      />
    ).toJSON();

    console.log(tree);

  });


})
