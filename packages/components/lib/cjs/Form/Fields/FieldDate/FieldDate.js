"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldDate = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FloatingLabelField = require("../Field/FloatingLabelField");

var _Field = require("../Field/Field");

var _Form = require("../../Form");

var _useID = require("../../../utils/useID");

var _InputDate = require("../../Inputs/InputDate");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldDate = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var defaultValue = props.defaultValue,
      id = props.id,
      onChange = props.onChange,
      value = props.value;
  var validationMessage = (0, _Form.useFormContext)(props);
  return _react["default"].createElement(_FloatingLabelField.FloatingLabelField, (0, _extends2["default"])({
    checkValueOnBlur: false,
    hasValue: !!defaultValue || !!value,
    id: (0, _useID.useID)(id),
    validationMessage: validationMessage
  }, (0, _Field.pickFieldProps)(props)), _react["default"].createElement(_InputDate.InputDate, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    "aria-labelledby": "labelledby-".concat(id),
    id: (0, _useID.useID)(id),
    onChange: onChange,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
})).withConfig({
  displayName: "FieldDate",
  componentId: "sc-1qj123p-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldDate = FieldDate;
//# sourceMappingURL=FieldDate.js.map