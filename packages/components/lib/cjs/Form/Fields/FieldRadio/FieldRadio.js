"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldRadio = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _Radio = require("../../Inputs/Radio/Radio");

var _Field = require("../Field");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldRadioLayout = (0, _react.forwardRef)(function (props, ref) {
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(props.id);
  return _react["default"].createElement(_Field.FieldInline, (0, _extends2["default"])({
    id: id,
    validationMessage: validationMessage
  }, (0, _Field.pickFieldProps)(props)), _react["default"].createElement(_Radio.Radio, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    id: id,
    ref: ref,
    validationType: validationMessage && validationMessage.type || props.validationType
  })));
});
FieldRadioLayout.displayName = 'FieldRadioLayout';
var FieldRadio = (0, _styledComponents["default"])(FieldRadioLayout).withConfig({
  displayName: "FieldRadio",
  componentId: "sc-1ey14ql-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldRadio = FieldRadio;
//# sourceMappingURL=FieldRadio.js.map