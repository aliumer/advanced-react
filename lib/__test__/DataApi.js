import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

describe('DataApi', ()=>{

  it('it exposes Articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  })

  it('it exposes Authers as an object', () => {
    const authers = api.getArticles();
    const autherId = data.articles[0].id;
    const autherFirstName = data.articles[0].firstName;

    expect(authers).toHaveProperty(autherId);
    expect(authers[autherId].firstName).toBe(autherFirstName);

  })

})