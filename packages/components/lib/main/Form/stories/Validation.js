"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Validation() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    val1 = _useState2[0],
    setVal1 = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    val2 = _useState4[0],
    setVal2 = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    validationErrors = _useState6[0],
    setValidationErrors = _useState6[1];
  var validate = function validate(value1, value2) {
    var errors = {};
    if (value1.length >= 5) {
      errors.val1 = {
        message: 'Error! String greater than 5 characters.',
        type: 'error'
      };
    }
    if (value2.length <= 5) {
      errors.val2 = {
        message: 'Error! String less than 5 characters.',
        type: 'error'
      };
    }
    setValidationErrors(errors);
  };
  var onChangeVal1 = function onChangeVal1(event) {
    setVal1(event.currentTarget.value);
    validate(event.currentTarget.value, val2);
  };
  var onChangeVal2 = function onChangeVal2(event) {
    setVal2(event.currentTarget.value);
    validate(val1, event.currentTarget.value);
  };
  return _react["default"].createElement(_.Form, {
    validationMessages: validationErrors
  }, _react["default"].createElement(_.FieldText, {
    name: "val1",
    value: val1,
    label: "A Field requiring less than 5 characters",
    onChange: onChangeVal1
  }), _react["default"].createElement(_.FieldText, {
    name: "val2",
    value: val2,
    label: "A Field requiring more than 5 characters",
    onChange: onChangeVal2
  }));
}
//# sourceMappingURL=Validation.js.map