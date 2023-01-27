"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Sparkline = exports.LineWidth = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _excluded = ["config"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/Sparkline'
};
exports["default"] = _default;
var Template = function Template(_ref) {
  var configProp = _ref.config,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var data = (0, _visualizationsAdapters.tabularResponse)((0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkDataResponse));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), configProp), {}, {
      type: 'sparkline'
    }),
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse
  });
  return _react["default"].createElement(_Visualization.Visualization, (0, _extends2["default"])({
    config: config,
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse
  }, restProps));
};
var Sparkline = Template.bind({});
exports.Sparkline = Sparkline;
Sparkline.args = {};
var LineWidth = Template.bind({});
exports.LineWidth = LineWidth;
LineWidth.args = {
  config: {
    series: [{
      line_width: 15
    }]
  }
};
//# sourceMappingURL=Sparkline.stories.js.map