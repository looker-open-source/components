"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSearch = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@looker/components");
var _ExpandMore = require("@styled-icons/material-rounded/ExpandMore");
var _Search = require("@styled-icons/material-outlined/Search");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var FieldSearch = _react["default"].forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
    fieldSearchInputId = _ref.fieldSearchInputId,
    width = _ref.width,
    height = _ref.height,
    label = _ref.label,
    onClick = _ref.onClick,
    value = _ref.value,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    placeholder = _ref.placeholder,
    isOpen = _ref.isOpen,
    withDropdown = _ref.withDropdown,
    showSelectedSection = _ref.showSelectedSection,
    disabledText = _ref.disabledText;
  var _ref2 = (value === null || value === void 0 ? void 0 : value.split('•')) || [],
    _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
    section = _ref3[0],
    field = _ref3[1];
  return _react["default"].createElement(_components.Flex, {
    position: "relative",
    flexDirection: "column",
    width: width,
    height: height,
    overflow: "hidden",
    flexShrink: 0
  }, label && _react["default"].createElement(SearchLabel, {
    htmlFor: fieldSearchInputId
  }, label), _react["default"].createElement(SearchInput, {
    disabled: disabled,
    ref: ref,
    flexWrap: "nowrap",
    alignItems: "center",
    onClick: onClick,
    px: "small"
  }, _react["default"].createElement(_components.Icon, {
    icon: _react["default"].createElement(_Search.Search, null),
    size: 24
  }), disabledText ? _react["default"].createElement(TextContainer, {
    px: "small"
  }, disabledText) : _react["default"].createElement(InnerInputText, {
    id: label ? fieldSearchInputId : undefined,
    display:
    showSelectedSection && withDropdown ? isOpen || value === '' ? 'block' : 'none' : 'block',
    width: "100%",
    height: "auto",
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    autoComplete: "off"
  }), !disabledText && showSelectedSection && withDropdown && !isOpen && value && _react["default"].createElement(TextContainer, {
    px: "xsmall"
  }, _react["default"].createElement(SectionText, null, section), _react["default"].createElement(DividerText, null, "\u2022"), _react["default"].createElement(FieldText, null, field)), _react["default"].createElement(_components.IconButton, {
    tooltipDisabled: true,
    label: "View fields",
    icon: _react["default"].createElement(_ExpandMore.ExpandMore, null),
    size: "small",
    outline: false,
    p: "none",
    mr: "xsmall"
  })));
});
exports.FieldSearch = FieldSearch;
var InnerInputText = (0, _styledComponents["default"])(_components.InputText).withConfig({
  displayName: "FieldSearch__InnerInputText",
  componentId: "sc-1poof9l-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &:focus,\n  &:focus-within {\n    box-shadow: none;\n  }\n"])));
var TextContainer = (0, _styledComponents["default"])(_components.Box).withConfig({
  displayName: "FieldSearch__TextContainer",
  componentId: "sc-1poof9l-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: text;\n  display: table;\n  font-size: ", ";\n  overflow: hidden;\n  width: 100%;\n  table-layout: fixed;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontSizes.small;
});
var SectionText = (0, _styledComponents["default"])(_components.Text).withConfig({
  displayName: "FieldSearch__SectionText",
  componentId: "sc-1poof9l-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text4;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.small;
});
var DividerText = (0, _styledComponents["default"])(_components.Text).withConfig({
  displayName: "FieldSearch__DividerText",
  componentId: "sc-1poof9l-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.text4;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSizes.small;
});
var FieldText = (0, _styledComponents["default"])(_components.Text).withConfig({
  displayName: "FieldSearch__FieldText",
  componentId: "sc-1poof9l-4"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.text4;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.fontSizes.small;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.fontWeights.semiBold;
});
var SearchLabel = (0, _styledComponents["default"])(_components.Label).withConfig({
  displayName: "FieldSearch__SearchLabel",
  componentId: "sc-1poof9l-5"
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-bottom: ", ";\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.text2;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.fontSizes.xsmall;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.fontWeights.normal;
}, function (_ref15) {
  var space = _ref15.theme.space;
  return space.xsmall;
});
var SearchInput = (0, _styledComponents["default"])(_components.Flex).withConfig({
  displayName: "FieldSearch__SearchInput",
  componentId: "sc-1poof9l-6"
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  border: solid 1px ", ";\n  border-radius: ", ";\n  height: 48px;\n  padding-right: 0;\n\n  &:focus-within {\n    border-color: ", ";\n    box-shadow: 0 0 1px ", ";\n  }\n\n  &[disabled] {\n    background-color: ", ";\n    border-color: ", ";\n    * {\n      color: ", ";\n      pointer-events: none;\n    }\n  }\n\n  ", " {\n    border: none;\n    font-size: ", ";\n    outline: none;\n\n    :not(:focus) {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    color: ", ";\n    margin-right: 6px;\n\n    &:focus,\n    &:hover {\n      color: ", ";\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n"])), function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.ui2;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.radii.medium;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.colors.keyFocus;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.colors.keyFocus;
}, function (_ref20) {
  var colors = _ref20.theme.colors;
  return colors.ui1;
}, function (_ref21) {
  var colors = _ref21.theme.colors;
  return colors.ui2;
}, function (_ref22) {
  var colors = _ref22.theme.colors;
  return colors.text1;
}, _components.InputText, function (_ref23) {
  var theme = _ref23.theme;
  return theme.fontSizes.small;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.text4;
}, _components.IconButton, function (_ref25) {
  var theme = _ref25.theme;
  return theme.colors.text1;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.colors.text5;
});
//# sourceMappingURL=FieldSearch.js.map