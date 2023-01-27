"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildGroupedColumns = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ = require(".");

var buildGroupedColumns = function buildGroupedColumns(props) {
  var fields = props.fields,
    pivots = props.pivots,
    config = props.config;

  var reversedPivots = (0, _toConsumableArray2["default"])(fields.pivots || []).reverse();
  var dimensionColumns = (0, _.buildDimensionColumns)(fields.dimensions);
  var nestedDimensions = (0, _.nestPivotedFields)({
    pivotList: reversedPivots,
    pivotIndex: 0,
    nestedPivots: dimensionColumns
  });
  var measureColumns = (0, _.buildMeasureColumns)(fields.measures, config);
  var nestedMeasures = Object.entries(measureColumns).reduce(function (groups, _ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      pivotKey = _ref2[0],
      measures = _ref2[1];
    var pivot = pivots.find(function (p) {
      return p.key === pivotKey;
    });
    var columnGroups = (0, _.nestPivotedFields)({
      pivotList: reversedPivots,
      pivotIndex: 0,
      nestedPivots: measures,
      pivotValues: pivot
    });
    return [].concat((0, _toConsumableArray2["default"])(groups), [columnGroups]);
  }, []);
  return [nestedDimensions].concat((0, _toConsumableArray2["default"])(nestedMeasures));
};
exports.buildGroupedColumns = buildGroupedColumns;
//# sourceMappingURL=buildGroupedColumns.js.map