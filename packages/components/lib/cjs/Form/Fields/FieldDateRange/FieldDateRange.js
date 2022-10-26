"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldDateRange = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FloatingLabelField = require("../Field/FloatingLabelField");

var _Field = require("../Field/Field");

var _Form = require("../../Form");

var _utils = require("../../../utils");

var _InputDateRange = require("../../Inputs/InputDateRange");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var checkValueOnBlur = function checkValueOnBlur(e) {
  var inputs = Array.from(e.currentTarget.querySelectorAll('input'));
  return inputs.some(function (input) {
    return input.value !== '';
  });
};

var FieldDateRange = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(props.id);
  return _react["default"].createElement(_FloatingLabelField.FloatingLabelField, (0, _extends2["default"])({}, (0, _Field.pickFieldProps)(props), {
    checkValueOnBlur: checkValueOnBlur,
    hasValue: !!props.value,
    id: id,
    validationMessage: validationMessage
  }), _react["default"].createElement(_InputDateRange.InputDateRange, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    "aria-labelledby": "labelledby-".concat(id),
    id: id,
    onChange: props.onChange,
    value: props.value,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
})).withConfig({
  displayName: "FieldDateRange",
  componentId: "sc-xojxrj-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldDateRange = FieldDateRange;
//# sourceMappingURL=FieldDateRange.js.map