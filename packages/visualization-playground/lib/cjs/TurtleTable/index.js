"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurtleTable = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _react = _interopRequireDefault(require("react"));

var _visualizations = require("@looker/visualizations");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _components = require("@looker/components");

var nestSparklines = function nestSparklines(data, dataKey) {
  var transformedData = data.reduce(function (acc, d) {
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
        item: i
      }, dataKey, value);
    });
    return [].concat((0, _toConsumableArray2["default"])(acc), [(_ref4 = {}, (0, _defineProperty2["default"])(_ref4, parentDimension[0], parentDimension[1]), (0, _defineProperty2["default"])(_ref4, dataKey, function () {
      return _react["default"].createElement(_visualizations.Sparkline, {
        height: 75,
        data: nonPivotedData,
        fields: {
          measures: [{
            name: dataKey
          }],
          dimensions: []
        }
      });
    }), _ref4)]);
  }, []);
  return transformedData;
};

var TurtleTable = function TurtleTable(_ref5) {
  var _fields$pivots;

  var _ref5$height = _ref5.height,
      height = _ref5$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT * 2 : _ref5$height,
      width = _ref5.width,
      fields = _ref5.fields,
      data = _ref5.data,
      config = _ref5.config,
      pivots = _ref5.pivots;

  if (((_fields$pivots = fields.pivots) === null || _fields$pivots === void 0 ? void 0 : _fields$pivots.length) !== 1 || fields.dimensions.length !== 1 || fields.measures.length === 1) {
    return _react["default"].createElement(_components.MessageBar, {
      intent: "critical",
      noActions: true
    }, "Turtle Table: Please select one dimension, one measure, and one pivot to render this visualization.");
  }

  var NESTED_DATA_KEY = 'nestedData';
  var nestedData = nestSparklines(data, NESTED_DATA_KEY);
  return _react["default"].createElement(_visualizations.Table, {
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
    width: width,
    height: height
  });
};

exports.TurtleTable = TurtleTable;
//# sourceMappingURL=index.js.map