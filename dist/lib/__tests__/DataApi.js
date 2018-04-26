'use strict';

var _DataApi = require('../DataApi');

var _DataApi2 = _interopRequireDefault(_DataApi);

var _testData = require('../testData.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = new _DataApi2.default(_testData.data);

describe('DataApi', function () {
  it('exposes articles as an object', function () {
    var articles = api.getArticles();
    var articleId = _testData.data.articles[0].id;
    var articleTitle = _testData.data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', function () {
    var authors = api.getAuthors();
    var authorId = _testData.data.authors[0].id;
    var authorTitle = _testData.data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });
});
//# sourceMappingURL=DataApi.js.map