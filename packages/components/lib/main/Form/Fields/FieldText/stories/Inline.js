"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inline;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _excluded = ["inline", "name", "label", "detail"];
function Inline(props) {
  var _props$inline = props.inline,
    inline = _props$inline === void 0 ? true : _props$inline,
    _props$name = props.name,
    name = _props$name === void 0 ? 'firstName' : _props$name,
    _props$label = props.label,
    label = _props$label === void 0 ? 'First Name' : _props$label,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? 'Your preferred salutation' : _props$detail,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    name: name,
    label: label,
    inline: inline,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=Inline.js.map