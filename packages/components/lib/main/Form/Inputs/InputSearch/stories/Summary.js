"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Summary;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["placeholder", "summary"];
function Summary(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Type your search' : _props$placeholder,
    _props$summary = props.summary,
    summary = _props$summary === void 0 ? 'summary text' : _props$summary,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    placeholder: placeholder,
    summary: summary
  }, restProps));
}
//# sourceMappingURL=Summary.js.map