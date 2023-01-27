"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleValue = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _numeral = _interopRequireDefault(require("numeral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _templateObject, _templateObject2, _templateObject3;
var SingleValue = function SingleValue(_ref) {
  var data = _ref.data,
    fields = _ref.fields,
    width = _ref.width,
    height = _ref.height,
    config = _ref.config;
  if (!data) {
    return null;
  }
  var _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series;

  var name = fields.measures[0].name;
  var firstSeries = Array.isArray(series) ? series[0] : series[name || ''];
  var color = firstSeries.color,
    label = firstSeries.label,
    value_format = firstSeries.value_format;
  var value = data[0][name || ''];
  var formattedValue = (0, _numeral["default"])(value).format(value_format);
  return _react["default"].createElement(_visualizationsAdapters.VisWrapper, null, _react["default"].createElement(SingleValueLayout, {
    width: width,
    height: height
  }, _react["default"].createElement(SingleValueContent, {
    color: color
  }, formattedValue), label && _react["default"].createElement(SingleValueTitle, {
    color: color
  }, label)));
};
exports.SingleValue = SingleValue;
var SingleValueLayout = _styledComponents["default"].div.withConfig({
  displayName: "SingleValue__SingleValueLayout",
  componentId: "sc-1qwcp7y-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background: ", ";\n  display: grid;\n  grid-template-columns: 1fr;\n  height: ", ";\n  justify-items: center;\n  width: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
}, function (_ref3) {
  var height = _ref3.height;
  return "".concat(height, "px") || "auto";
}, function (_ref4) {
  var width = _ref4.width;
  return "".concat(width, "px") || "auto";
});
var SingleValueContent = _styledComponents["default"].div.withConfig({
  displayName: "SingleValue__SingleValueContent",
  componentId: "sc-1qwcp7y-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref5) {
  var color = _ref5.color;
  return "".concat(color);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.xxxlarge;
});
var SingleValueTitle = _styledComponents["default"].div.withConfig({
  displayName: "SingleValue__SingleValueTitle",
  componentId: "sc-1qwcp7y-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  opacity: 50%;\n"])), function (_ref7) {
  var color = _ref7.color;
  return "".concat(color);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSizes.large;
});
//# sourceMappingURL=SingleValue.js.map