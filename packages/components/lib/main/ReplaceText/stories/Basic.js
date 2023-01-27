"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ReplaceText = require("../ReplaceText");
var _excluded = ["match"];
function Basic(_ref) {
  var _ref$match = _ref.match,
    match = _ref$match === void 0 ? 'che' : _ref$match,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_ReplaceText.ReplaceText, (0, _extends2["default"])({
    match: match
  }, props), "Cheddar cheese");
}
//# sourceMappingURL=Basic.js.map