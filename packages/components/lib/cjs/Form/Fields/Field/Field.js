"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickFieldProps = exports.omitFieldProps = exports.fieldPropKeys = exports.Field = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _height = require("../../Inputs/height");

var _HelperText = require("./HelperText");

var _FieldDetail = require("./FieldDetail");

var _FieldLabel = require("./FieldLabel");

var _InputArea = require("./InputArea");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fieldPropKeys = ['className', 'description', 'detail', 'externalLabel', 'id', 'inline', 'label', 'hideLabel', 'labelWidth', 'validationMessage', 'width'];
exports.fieldPropKeys = fieldPropKeys;

var pickFieldProps = function pickFieldProps(props) {
  return (0, _pick["default"])(props, [].concat(fieldPropKeys, ['disabled', 'required', 'autoResize']));
};

exports.pickFieldProps = pickFieldProps;

var omitFieldProps = function omitFieldProps(props) {
  return (0, _omit["default"])(props, fieldPropKeys);
};

exports.omitFieldProps = omitFieldProps;
var Field = (0, _styledComponents["default"])(function (_ref) {
  var autoResize = _ref.autoResize,
      className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      detail = _ref.detail,
      id = _ref.id,
      ariaLabelOnly = _ref.ariaLabelOnly,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      required = _ref.required,
      validationMessage = _ref.validationMessage;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(_FieldLabel.FieldLabel, {
    ariaLabelOnly: ariaLabelOnly,
    id: id,
    label: label,
    hideLabel: hideLabel,
    required: required
  }), _react["default"].createElement(_InputArea.InputArea, {
    autoResize: autoResize
  }, children), detail && _react["default"].createElement(_FieldDetail.FieldDetail, null, detail), _react["default"].createElement(_HelperText.HelperText, {
    description: description,
    id: id,
    validationMessage: validationMessage
  }));
}).withConfig({
  displayName: "Field",
  componentId: "sc-1luvvdx-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: left;\n\n  display: ", ";\n  ", "\n  grid-template-columns: ", ";\n  height: fit-content;\n  justify-content: space-between;\n  width: ", ";\n  ", "\n\n  ", " {\n    grid-area: input;\n  }\n\n  ", " {\n    grid-area: messages;\n  }\n\n  & > ", " {\n    grid-area: label;\n    ", "\n  }\n\n  ", " {\n    grid-area: detail;\n    justify-self: end;\n    padding-left: ", ";\n\n    ", "\n  }\n"])), function (_ref2) {
  var autoResize = _ref2.autoResize;
  return autoResize ? 'inline-grid' : 'grid';
}, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? inlineTemplateAreas : templateAreas;
}, function (_ref4) {
  var inline = _ref4.inline;
  return inline ? '150px 1fr' : undefined;
}, function (_ref5) {
  var autoResize = _ref5.autoResize;
  return autoResize ? 'fit-content' : '100%';
}, _designTokens.width, _InputArea.InputArea, _HelperText.HelperText, _FieldLabel.FieldLabel, function (_ref6) {
  var inline = _ref6.inline;
  return fieldLabelCSS(inline);
}, _FieldDetail.FieldDetail, function (_ref7) {
  var space = _ref7.theme.space;
  return space.u3;
}, function (_ref8) {
  var inline = _ref8.inline;
  return inline && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        align-self: center;\n      "])));
});
exports.Field = Field;

var fieldLabelCSS = function fieldLabelCSS(inline) {
  return inline ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        height: ", ";\n        justify-self: end;\n        line-height: ", ";\n        padding-right: ", ";\n        text-align: right;\n      "])), _height.inputHeight, _height.inputHeight, function (_ref9) {
    var theme = _ref9.theme;
    return theme.space.u3;
  }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        line-height: ", ";\n        padding-bottom: ", ";\n      "])), function (_ref10) {
    var theme = _ref10.theme;
    return theme.lineHeights.xsmall;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.space.u1;
  });
};

var inlineTemplateAreas = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  grid-template-areas: 'label input detail' '. messages messages';\n"])));
var templateAreas = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  grid-template-areas: 'label detail' 'input input' 'messages messages';\n"])));
//# sourceMappingURL=Field.js.map