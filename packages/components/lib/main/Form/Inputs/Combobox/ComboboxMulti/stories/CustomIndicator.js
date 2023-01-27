"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomIndicator;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ComboboxMultiInput = require("../../ComboboxMultiInput");
var _ComboboxMultiOption = require("../../ComboboxMultiOption");
var _ComboboxList = require("../../ComboboxList");
var _ = require("..");
var _excluded = ["width"];
var Indicator = function Indicator(_ref) {
  var isActive = _ref.isActive,
    isSelected = _ref.isSelected;
  var indicator;
  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }
  return _react["default"].createElement(_react["default"].Fragment, null, indicator);
};
function CustomIndicator(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.ComboboxMulti, (0, _extends2["default"])({
    width: width
  }, restProps), _react["default"].createElement(_ComboboxMultiInput.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    placeholder: "Custom indicator"
  }), _react["default"].createElement(_ComboboxList.ComboboxMultiList, {
    indicator: Indicator,
    persistSelection: true
  }, _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Pineapples"
  })));
}
//# sourceMappingURL=CustomIndicator.js.map