"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldRadioGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _Field = require("../Field");

var _OptionsGroup = require("../../Inputs/OptionsGroup");

var _templateObject;

var _excluded = ["id", "options", "name", "inputsInline"];

var FieldRadioGroupLayout = function FieldRadioGroupLayout(_ref) {
  var propsID = _ref.id,
      options = _ref.options,
      name = _ref.name,
      inputsInline = _ref.inputsInline,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(propsID);
  return _react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, (0, _Field.pickFieldProps)(props), {
    id: id
  }), _react["default"].createElement(_OptionsGroup.RadioGroup, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    "aria-labelledby": "labelledby-".concat(id),
    id: id,
    inline: props.inline || inputsInline,
    name: name || id,
    options: options,
    validationType: validationMessage && validationMessage.type
  })));
};

FieldRadioGroupLayout.displayName = 'FieldRadioGroupLayout';
var FieldRadioGroup = (0, _styledComponents["default"])(FieldRadioGroupLayout).withConfig({
  displayName: "FieldRadioGroup",
  componentId: "sc-4fiozu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldRadioGroup = FieldRadioGroup;
//# sourceMappingURL=FieldRadioGroup.js.map