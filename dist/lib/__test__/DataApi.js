'use strict';

var _DataApi = require('../DataApi');

var _DataApi2 = _interopRequireDefault(_DataApi);

var _testData = require('../testData.json');

var data = _interopRequireWildcard(_testData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = new _DataApi2.default(data);

describe('DataApi', function () {
  it('exposes articles as an object', function () {
    var articles = api.getArticles();
    var articleId = data.articles[0].id;
    var articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', function () {
    var authors = api.getAuthors();
    var authorId = data.authors[0].id;
    var authorTitle = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });
});
//# sourceMappingURL=DataApi.js.map