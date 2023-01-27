"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonText;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["handleFile", "buttonText"];
function ButtonText(props) {
  var _props$handleFile = props.handleFile,
    handleFile = _props$handleFile === void 0 ? function () {
    } : _props$handleFile,
    _props$buttonText = props.buttonText,
    buttonText = _props$buttonText === void 0 ? 'Browse local files' : _props$buttonText,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputFile, (0, _extends2["default"])({
    handleFile: handleFile,
    buttonText: buttonText
  }, restProps));
}
//# sourceMappingURL=ButtonText.js.map