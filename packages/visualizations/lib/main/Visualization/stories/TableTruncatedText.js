"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TruncatedText;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _ = require("../");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function TruncatedText() {
  return _react["default"].createElement(_.Visualization, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      truncate_text: true,
      truncate_header: true
    }),
    data: [{
      'author.name': 'Henry David Thoreau',
      'author.bio': 'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay "Civil Disobedience", an argument for disobedience to an unjust state.',
      'author.books_published': 2
    }, {
      'author.name': 'Margaret Atwood',
      'author.bio': "Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards",
      'author.books_published': 47
    }],
    fields: {
      measures: [{
        is_numeric: true,
        label: 'Books Published',
        label_short: 'Books Published',
        name: 'author.books_published',
        sortable: true,
        sorted: {
          desc: true,
          sort_index: 0
        },
        type: 'count_distinct',
        view: 'author',
        view_label: 'Author',
        value_format: null
      }],
      dimensions: [{
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'Author Name',
        label_short: 'Author Name',
        name: 'author.name',
        sortable: true,
        type: 'string',
        view: 'author',
        view_label: 'Author',
        value_format: null
      }, {
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'Author Biography',
        label_short: 'Author Biography',
        name: 'author.bio',
        sortable: true,
        type: 'string',
        view: 'author',
        view_label: 'Author',
        value_format: null
      }],
      pivots: []
    }
  });
}
//# sourceMappingURL=TableTruncatedText.js.map