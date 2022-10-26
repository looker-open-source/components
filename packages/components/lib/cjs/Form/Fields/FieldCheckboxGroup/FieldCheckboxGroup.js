"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldCheckboxGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _Inputs = require("../../Inputs");

var _Field = require("../Field");

var _templateObject;

var _excluded = ["id", "options", "value", "name", "inputsInline"];

var FieldCheckboxGroupLayout = function FieldCheckboxGroupLayout(_ref) {
  var propsID = _ref.id,
      options = _ref.options,
      value = _ref.value,
      name = _ref.name,
      inputsInline = _ref.inputsInline,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(propsID);
  return _react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, (0, _Field.pickFieldProps)(props), {
    id: id
  }), _react["default"].createElement(_Inputs.CheckboxGroup, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    "aria-labelledby": "labelledby-".concat(id),
    id: id,
    inline: props.inline || inputsInline,
    name: name || id,
    options: options,
    validationType: validationMessage && validationMessage.type,
    value: value
  })));
};

FieldCheckboxGroupLayout.displayName = 'FieldCheckboxGroupLayout';
var FieldCheckboxGroup = (0, _styledComponents["default"])(FieldCheckboxGroupLayout).withConfig({
  displayName: "FieldCheckboxGroup",
  componentId: "sc-w2hs65-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldCheckboxGroup = FieldCheckboxGroup;
//# sourceMappingURL=FieldCheckboxGroup.js.map