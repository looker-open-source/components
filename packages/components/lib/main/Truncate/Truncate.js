"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncateOptionally = exports.Truncate = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Span = require("../Text/Span");
var _utils = require("../utils");
var _useTruncateTooltip2 = require("./useTruncateTooltip");
var _templateObject;
var _excluded = ["truncate"];
var getTruncateDescription = function getTruncateDescription(truncate) {
  return (0, _typeof2["default"])(truncate) === 'object' ? truncate.description : undefined;
};

var TruncateOptionally = function TruncateOptionally(_ref) {
  var truncate = _ref.truncate,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return truncate ? _react["default"].createElement(Truncate, (0, _extends2["default"])({
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
  return _react["default"].createElement(_react["default"].Fragment, null, tooltip, _react["default"].createElement("span", (0, _extends2["default"])({}, domProps, {
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n  ", "\n  ", "\n\n  :focus-within {\n    a {\n      outline: none;\n    }\n  }\n"])), _designTokens.textColor, _designTokens.typography, _designTokens.width);
exports.Truncate = Truncate;
//# sourceMappingURL=Truncate.js.map