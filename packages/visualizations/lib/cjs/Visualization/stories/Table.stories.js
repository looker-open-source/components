"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WrappedText = exports.TruncatedText = exports.Table = exports.Pivot = exports.MultiSort = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Visualization = require("../Visualization");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _components = require("@looker/components");

var _excluded = ["config"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Table'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var configProp = _ref.config,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var data = (0, _visualizationsAdapters.tabularResponse)((0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkDataResponse));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), configProp), {}, {
      type: 'table'
    }),
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse
  });
  return _react["default"].createElement(_Visualization.Visualization, (0, _extends2["default"])({
    config: config,
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse,
    height: 600
  }, restProps, {
    totals: _visualizationsAdapters.mockTotals
  }));
};

var Table = Template.bind({});
exports.Table = Table;
Table.args = {
  config: {
    show_row_numbers: true,
    show_totals: true
  }
};

var Pivot = function Pivot() {
  var mockPivotFields = (0, _visualizationsAdapters.buildPivotFields)({
    fields: _visualizationsAdapters.mockSdkPivotedFieldsResponse,
    pivots: _visualizationsAdapters.mockPivots
  });
  var mockPivotData = (0, _visualizationsAdapters.tabularPivotResponse)({
    data: (0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkPivotDataResponse),
    fields: _visualizationsAdapters.mockSdkPivotedFieldsResponse,
    pivots: _visualizationsAdapters.mockPivots
  });
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), {}, {
      type: 'table'
    }),
    data: mockPivotData,
    fields: mockPivotFields
  });
  return _react["default"].createElement(_Visualization.Visualization, {
    config: config,
    data: mockPivotData,
    fields: mockPivotFields,
    pivots: _visualizationsAdapters.mockPivots,
    height: 600
  });
};

exports.Pivot = Pivot;

var LongTextTemplate = function LongTextTemplate(_ref2) {
  var truncate_text = _ref2.truncate_text,
      truncate_header = _ref2.truncate_header;
  return _react["default"].createElement(_Visualization.Visualization, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      truncate_text: truncate_text,
      truncate_header: truncate_header
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
};

var TruncatedText = LongTextTemplate.bind({});
exports.TruncatedText = TruncatedText;
TruncatedText.args = {
  truncate_text: true,
  truncate_header: true
};
TruncatedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: _components.VIEWPORT_MAP
  }
};
var WrappedText = LongTextTemplate.bind({});
exports.WrappedText = WrappedText;
WrappedText.args = {
  truncate_text: false,
  truncate_header: false
};
WrappedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: _components.VIEWPORT_MAP
  }
};

var MultiSort = function MultiSort() {
  return _react["default"].createElement(_Visualization.Visualization, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      series: [{
        cell_visualization: true
      }]
    }),
    data: [{
      'order.year': '2012',
      'user.state': 'Oregon',
      'order.count': 200
    }, {
      'order.year': '2013',
      'user.state': 'Oregon',
      'order.count': 300
    }, {
      'order.year': '2014',
      'user.state': 'Oregon',
      'order.count': 150
    }, {
      'order.year': '2012',
      'user.state': 'California',
      'order.count': 400
    }, {
      'order.year': '2013',
      'user.state': 'California',
      'order.count': 250
    }, {
      'order.year': '2014',
      'user.state': 'California',
      'order.count': 600
    }, {
      'order.year': '2012',
      'user.state': 'Washington',
      'order.count': 99
    }, {
      'order.year': '2013',
      'user.state': 'Washington',
      'order.count': 500
    }, {
      'order.year': '2014',
      'user.state': 'Washington',
      'order.count': 250
    }],
    fields: {
      measures: [{
        is_numeric: true,
        label: 'Order count',
        label_short: 'Orders',
        name: 'order.count',
        sortable: true,
        sorted: {
          desc: false,
          sort_index: 1
        },
        type: 'count_distinct',
        view: 'order',
        view_label: 'Orders',
        value_format: null
      }],
      dimensions: [{
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'Order Year',
        label_short: 'Year',
        name: 'order.year',
        sortable: true,
        sorted: {
          desc: false,
          sort_index: 0
        },
        type: 'string',
        view: 'order',
        view_label: 'Order',
        value_format: null
      }, {
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'User State',
        label_short: 'State',
        name: 'user.state',
        sortable: true,
        sorted: {
          desc: true,
          sort_index: 2
        },
        type: 'string',
        view: 'user',
        view_label: 'User',
        value_format: null
      }],
      pivots: []
    }
  });
};

exports.MultiSort = MultiSort;
//# sourceMappingURL=Table.stories.js.map