"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldRadioGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _Form = require("../../Form");
var _Field = require("../Field");
var _Inputs = require("../../Inputs");
var _templateObject;
var _excluded = ["id", "options", "name", "inputsInline"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FieldRadioGroupLayout = function FieldRadioGroupLayout(_ref) {
  var propsID = _ref.id,
    options = _ref.options,
    name = _ref.name,
    inputsInline = _ref.inputsInline,
    props = _objectWithoutProperties(_ref, _excluded);
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(propsID);
  return _react["default"].createElement(_Field.Field, _extends({}, (0, _Field.pickFieldProps)(props), {
    id: id
  }), _react["default"].createElement(_Inputs.RadioGroup, _extends({}, (0, _Field.omitFieldProps)(props), {
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.FieldRadioGroup = FieldRadioGroup;
//# sourceMappingURL=FieldRadioGroup.js.map