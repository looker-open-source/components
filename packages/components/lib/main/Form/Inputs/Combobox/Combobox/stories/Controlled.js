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
var _ = require("../../../../../");
var _2 = require("../..");
var _ComboboxInput = require("../../ComboboxInput");
var _excluded = ["width", "value", "onChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Controlled(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    _props$value = props.value,
    valueProp = _props$value === void 0 ? {
      value: 'Bananas'
    } : _props$value,
    _onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(valueProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    option = _useState2[0],
    setOption = _useState2[1];
  var handleChange = function handleChange(newOption) {
    setOption(newOption);
  };
  var handlePineappleClick = function handlePineappleClick() {
    setOption({
      value: 'Pineapples'
    });
  };
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Button, {
    onClick: handlePineappleClick
  }, "Select Pineapples"), _react["default"].createElement(_2.Combobox, (0, _extends2["default"])({
    width: width,
    value: option,
    onChange: handleChange
  }, restProps), _react["default"].createElement(_ComboboxInput.ComboboxInput, null), _react["default"].createElement(_2.ComboboxList, null, _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples2"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges2"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes2"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas2"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples2"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples3"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges3"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes3"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas3"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples3"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples4"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges4"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Grapes4"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Bananas4"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Pineapples4"
  }))));
}
//# sourceMappingURL=Controlled.js.map