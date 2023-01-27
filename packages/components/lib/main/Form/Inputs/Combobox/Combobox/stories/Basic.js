"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _ComboboxInput = require("../../ComboboxInput");
var _excluded = ["width"];
function Basic(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Combobox, (0, _extends2["default"])({
    width: width
  }, restProps), _react["default"].createElement(_ComboboxInput.ComboboxInput, null), _react["default"].createElement(_.ComboboxList, null, _react["default"].createElement(_.ComboboxOption, {
    value: "Apples super long text to see what wrapping looks like"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  })));
}
//# sourceMappingURL=Basic.js.map