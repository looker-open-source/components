"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncateOptionally = exports.Truncate = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Span = require("../Text/Span");
var _utils = require("../utils");
var _useTruncateTooltip2 = require("./useTruncateTooltip");
var _templateObject;
var _excluded = ["truncate"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var getTruncateDescription = function getTruncateDescription(truncate) {
  return _typeof(truncate) === 'object' ? truncate.description : undefined;
};
var TruncateOptionally = function TruncateOptionally(_ref) {
  var truncate = _ref.truncate,
    props = _objectWithoutProperties(_ref, _excluded);
  return truncate ? _react["default"].createElement(Truncate, _extends({
    description: getTruncateDescription(truncate)
  }, props)) : _react["default"].createElement(_Span.Span, props);
};
exports.TruncateOptionally = TruncateOptionally;
var TruncateLayout = function TruncateLayout(_ref2) {
  var children = _ref2.children,
    propsClassName = _ref2.className,
    description = _ref2.description;
  var _useTruncateTooltip = (0, _useTruncateTooltip2.useTruncateTooltip)({
      children: children,
      description: description
    }),
    tooltip = _useTruncateTooltip.tooltip,
    domProps = _useTruncateTooltip.domProps;
  return _react["default"].createElement(_react["default"].Fragment, null, tooltip, _react["default"].createElement("span", _extends({}, domProps, {
    className: (0, _utils.mergeClassNames)([domProps.className, propsClassName])
  }), children));
};
var Truncate = (0, _styledComponents["default"])(TruncateLayout).attrs(function (_ref3) {
  var _ref3$width = _ref3.width,
    width = _ref3$width === void 0 ? '100%' : _ref3$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "Truncate",
  componentId: "sc-1y9fe07-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n  ", "\n  ", "\n\n  :focus-within {\n    a {\n      outline: none;\n    }\n  }\n"])), _designTokens.textColor, _designTokens.typography, _designTokens.width);
exports.Truncate = Truncate;
//# sourceMappingURL=Truncate.js.map