"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaceText = void 0;
var _react = _interopRequireWildcard(require("react"));
var _escapeRegExp = _interopRequireDefault(require("lodash/escapeRegExp"));
var _Text = require("../Text");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DefaultReplace = function DefaultReplace(props) {
  return _react["default"].createElement(_Text.Span, _extends({
    fontWeight: "semiBold",
    textDecoration: "underline"
  }, props));
};
var ReplaceString = function ReplaceString(_ref) {
  var children = _ref.children,
    match = _ref.match,
    _ref$replace = _ref.replace,
    replace = _ref$replace === void 0 ? DefaultReplace : _ref$replace;
  var matchRegExp = new RegExp("(".concat((0, _escapeRegExp["default"])(match), ")"), 'gi');
  var stringArr = children.split(matchRegExp);
  return _react["default"].createElement(_react["default"].Fragment, null, stringArr.map(function (stringItem, index) {
    return _react["default"].createElement(_react.Fragment, {
      key: index
    }, index % 2 === 1 ? replace({
      children: stringItem
    }) : stringItem || null);
  }));
};
var ReplaceText = function ReplaceText(_ref2) {
  var children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded);
  if (!rest.match) return _react["default"].createElement(_react["default"].Fragment, null, children);
  return _react["default"].createElement(_react["default"].Fragment, null, _react.Children.map(children, function (child) {
    return typeof child === 'string' ? _react["default"].createElement(ReplaceString, rest, child) : child;
  }));
};
exports.ReplaceText = ReplaceText;
//# sourceMappingURL=ReplaceText.js.map