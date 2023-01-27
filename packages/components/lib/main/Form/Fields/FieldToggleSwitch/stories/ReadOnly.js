"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["label", "name", "id", "readOnly"];
function ReadOnly(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? 'Toggle Switch' : _props$label,
    _props$name = props.name,
    name = _props$name === void 0 ? 'thumbsUp' : _props$name,
    _props$id = props.id,
    id = _props$id === void 0 ? 'id' : _props$id,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? true : _props$readOnly,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldToggleSwitch, (0, _extends2["default"])({
    id: id,
    label: label,
    name: name,
    readOnly: readOnly
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map