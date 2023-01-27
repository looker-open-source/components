"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ComboboxMultiInput = require("../../ComboboxMultiInput");
var _ComboboxMultiOption = require("../../ComboboxMultiOption");
var _ComboboxList = require("../../ComboboxList");
var _ = require("..");
var _excluded = ["width", "values", "onChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Controlled(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    _props$values = props.values,
    valuesProp = _props$values === void 0 ? [{
      value: 'Bananas'
    }] : _props$values,
    _onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(valuesProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var handleMultiChange = function handleMultiChange(newOptions) {
    setOptions(newOptions);
  };
  return _react["default"].createElement(_.ComboboxMulti, (0, _extends2["default"])({
    width: width,
    values: options,
    onChange: handleMultiChange
  }, restProps), _react["default"].createElement(_ComboboxMultiInput.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    freeInput: true
  }), _react["default"].createElement(_ComboboxList.ComboboxMultiList, null, _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
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
//# sourceMappingURL=Controlled.js.map