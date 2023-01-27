"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GroupedWindowing;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _options1k = require("../../Select/stories/options1k");
var _excluded = ["placeholder", "width"];
function GroupedWindowing(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Type your search' : _props$placeholder,
    _props$width = props.width,
    width = _props$width === void 0 ? 400 : _props$width,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    placeholder: placeholder,
    options: _options1k.options1kGrouped,
    width: width
  }, restProps));
}
//# sourceMappingURL=GroupedWindowing.js.map