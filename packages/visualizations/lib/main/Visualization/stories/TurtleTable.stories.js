"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TurtleTable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));
var _react = _interopRequireDefault(require("react"));
var _visualizationsVisx = require("@looker/visualizations-visx");
var _visualizationsTable = require("@looker/visualizations-table");
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/TurtleTable'
};
exports["default"] = _default;
var NESTED_DATA_KEY = 'orderCount';
var ROW_HEIGHT = 75;
var nestSparklines = function nestSparklines(data) {
  return data.reduce(function (acc, d) {
    var _ref4;
    var _Object$entries = Object.entries(d),
      _Object$entries2 = (0, _toArray2["default"])(_Object$entries),
      parentDimension = _Object$entries2[0],
      measurePairs = _Object$entries2.slice(1);

    var nonPivotedData = measurePairs.map(function (_ref, i) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        _ = _ref2[0],
        value = _ref2[1];
      return (0, _defineProperty2["default"])({
        entry: i
      }, NESTED_DATA_KEY, value);
    });

    return [].concat((0, _toConsumableArray2["default"])(acc), [(_ref4 = {}, (0, _defineProperty2["default"])(_ref4, parentDimension[0], parentDimension[1]), (0, _defineProperty2["default"])(_ref4, NESTED_DATA_KEY, function () {
      return _react["default"].createElement(_visualizationsVisx.Sparkline, {
        height: ROW_HEIGHT,
        data: nonPivotedData,
        fields: {
          measures: [{
            name: NESTED_DATA_KEY
          }],
          dimensions: []
        }
      });
    }), _ref4)]);
  }, []);
};
var TurtleTableComponent = function TurtleTableComponent(_ref5) {
  var fields = _ref5.fields,
    data = _ref5.data,
    config = _ref5.config,
    pivots = _ref5.pivots,
    height = _ref5.height;
  var nestedData = nestSparklines(data);
  return _react["default"].createElement(_visualizationsTable.Table, {
    height: height,
    fields: {
      measures: [{
        name: NESTED_DATA_KEY,
        label: 'Orders Count By Quarter'
      }],
      dimensions: fields.dimensions,
      pivots: []
    },
    config: config,
    data: nestedData,
    pivots: pivots,
    defaultRowHeight: ROW_HEIGHT
  });
};
var Template = function Template() {
  return _react["default"].createElement(_Visualization.Visualization, (0, _extends2["default"])({}, _visualizationsAdapters.mockPivotedQuery, {
    height: 600
    ,
    chartTypeMap: {
      turtle_table: TurtleTableComponent
    },
    config: {
      type: 'turtle_table'
    }
  }));
};
var TurtleTable = Template.bind({});
exports.TurtleTable = TurtleTable;
//# sourceMappingURL=TurtleTable.stories.js.map