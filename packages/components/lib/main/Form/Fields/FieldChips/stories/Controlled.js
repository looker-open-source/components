"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _FieldChips = require("../../FieldChips");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useState = (0, _react.useState)(['bananas']),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0, _react.useState)('oranges'),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var handleChange = function handleChange(vals) {
    return setValues(vals);
  };
  var handleInputChange = function handleInputChange(value) {
    return setInputValue(value);
  };
  return _react["default"].createElement(_FieldChips.FieldChips, {
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    summary: "summary"
  });
}
//# sourceMappingURL=Controlled.js.map