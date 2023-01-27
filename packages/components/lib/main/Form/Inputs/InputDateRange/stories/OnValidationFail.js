"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OnValidationFail;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Divider = require("../../../../Divider");
var _Layout = require("../../../../Layout");
var _Text = require("../../../../Text");
var _InputDateRange = require("../InputDateRange");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OnValidationFail() {
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isValid = _useState4[0],
    setIsValid = _useState4[1];
  var handleChange = function handleChange(newValue) {
    setValue(newValue);
    setIsValid(true);
  };
  var handleValidationFail = function handleValidationFail() {
    return setIsValid(false);
  };
  var message = isValid ? 'Valid Input' : 'Invalid Input';
  var color = isValid ? undefined : 'critical';
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Paragraph, {
    color: "text2"
  }, "INSTRUCTIONS: Try typing an invalid date string (ex: 'not/a/valid/date') and clicking or tabbing away to trigger blur event."), _react["default"].createElement(_Text.Heading, null, "Result:"), _react["default"].createElement(_Text.Paragraph, {
    color: color
  }, message), _react["default"].createElement(_Divider.Divider, null), _react["default"].createElement(_InputDateRange.InputDateRange, {
    value: value,
    onChange: handleChange,
    onValidationFail: handleValidationFail
  }));
}
//# sourceMappingURL=OnValidationFail.js.map