"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../");
var _2 = require("../");
var _excluded = ["name", "label", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Basic(props) {
  var _name = props.name,
    _label = props.label,
    _props$value = props.value,
    valueProp = _props$value === void 0 ? 'Initial Value' : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(valueProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleReset = function handleReset() {
    return setValue(valueProp);
  };
  var handleClear = function handleClear() {
    return setValue('');
  };
  var handleChange = function handleChange(e) {
    setValue(e.currentTarget.value);
  };
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Button, {
    onClick: handleReset
  }, "Reset"), _react["default"].createElement(_.Button, {
    onClick: handleClear
  }, "Clear")), _react["default"].createElement(_2.FieldTextArea, (0, _extends2["default"])({
    width: "100%",
    label: "Controlled",
    value: value,
    onChange: handleChange
  }, restProps)));
}
//# sourceMappingURL=Controlled.js.map