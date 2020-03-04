class DataApi {
  constructor(data) {
    this.rawData = data;
  }

  mapIntoObject(arr) {
    if (!arr) arr = [];
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthers() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;