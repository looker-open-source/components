"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pivot;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Visualization = require("../Visualization");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Pivot() {
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
}
//# sourceMappingURL=TablePivot.js.map