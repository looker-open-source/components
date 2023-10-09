"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemDetail = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _HoverDisclosure = require("../utils/HoverDisclosure");
var _utils = require("./utils");
var _excluded = ["accessory", "density", "hoverDisclosure", "width"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItemDetail = (0, _styledComponents["default"])(function (_ref) {
  var accessory = _ref.accessory,
    density = _ref.density,
    hoverDisclosure = _ref.hoverDisclosure,
    width = _ref.width,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_HoverDisclosure.HoverDisclosure, {
    width: width,
    visible: !hoverDisclosure
  }, _react["default"].createElement("div", props));
}).withConfig({
  displayName: "ListItemDetail",
  componentId: "sc-tpflji-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  height: 100%;\n  margin-left: auto;\n  padding-left: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.xsmall;
}, function (_ref4) {
  var accessory = _ref4.accessory,
    _ref4$density = _ref4.density,
    density = _ref4$density === void 0 ? 0 : _ref4$density,
    theme = _ref4.theme;
  return accessory ? 0 : theme.space[(0, _utils.listItemDimensions)(density).gap];
});
exports.ListItemDetail = ListItemDetail;
//# sourceMappingURL=ListItemDetail.js.map