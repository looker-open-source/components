"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ControlledInputValue;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../../");
var _ComboboxMultiInput = require("../../ComboboxMultiInput");
var _ComboboxMultiOption = require("../../ComboboxMultiOption");
var _ComboboxList = require("../../ComboboxList");
var _2 = require("..");
var _excluded = ["width", "values", "onChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ControlledInputValue(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    _props$values = props.values,
    valuesProp = _props$values === void 0 ? [{
      value: 'Apples'
    }] : _props$values,
    _onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)('starting value'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(valuesProp),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    values = _useState4[0],
    setValues = _useState4[1];
  var handleClick = function handleClick() {
    return setInputValue('bananas');
  };
  return _react["default"].createElement(_.SpaceVertical, {
    width: width,
    align: "start"
  }, _react["default"].createElement(_.Paragraph, null, "Current inputValue: ", inputValue), _react["default"].createElement(_.Button, {
    onClick: handleClick
  }, "Change Input Value"), _react["default"].createElement(_2.ComboboxMulti, (0, _extends2["default"])({
    values: values,
    onChange: setValues
  }, restProps), _react["default"].createElement(_ComboboxMultiInput.ComboboxMultiInput, {
    autoComplete: false,
    inputValue: inputValue,
    onInputChange: setInputValue,
    freeInput: true
  }), _react["default"].createElement(_ComboboxList.ComboboxMultiList, {
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
  }))));
}
//# sourceMappingURL=ControlledInputValue.js.map