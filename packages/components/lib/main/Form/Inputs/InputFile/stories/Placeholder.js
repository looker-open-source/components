"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placeholder;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["handleFile", "placeholder"];
function Placeholder(props) {
  var _props$handleFile = props.handleFile,
    handleFile = _props$handleFile === void 0 ? function () {
    } : _props$handleFile,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Select a file to upload' : _props$placeholder,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputFile, (0, _extends2["default"])({
    handleFile: handleFile,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=Placeholder.js.map