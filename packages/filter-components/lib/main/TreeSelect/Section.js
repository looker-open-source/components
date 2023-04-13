"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionLabelName = exports.SectionLabelDetail = exports.SectionLabel = exports.SectionFactory = exports.SectionContent = exports.Section = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@looker/components");
var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var _excluded = ["title", "isOpen", "onClick", "id", "detail"];
var SectionFactory = function SectionFactory(_ref) {
  var title = _ref.title,
    isOpen = _ref.isOpen,
    onClick = _ref.onClick,
    id = _ref.id,
    detail = _ref.detail,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var handleClick = function handleClick() {
    return onClick({
      isOpen: !isOpen,
      id: id
    });
  };
  return _react["default"].createElement(_components.Box, props, _react["default"].createElement(SectionLabel, {
    role: "button",
    onClick: handleClick,
    alignItems: "center"
  }, _react["default"].createElement(TreeArrowIcon, {
    open: isOpen,
    icon: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, null)
  }), _react["default"].createElement(SectionLabelName, {
    ml: "xxsmall",
    fontSize: "small"
  }, title), detail && _react["default"].createElement(SectionLabelDetail, {
    ml: "auto",
    fontSize: "xsmall"
  }, detail)), isOpen ? _react["default"].createElement(SectionContent, {
    pl: "medium"
  }, props.children) : _react["default"].createElement(_react["default"].Fragment, null));
};
exports.SectionFactory = SectionFactory;
var SectionLabelName = (0, _styledComponents["default"])(_components.Text).withConfig({
  displayName: "Section__SectionLabelName",
  componentId: "sc-cfbkz1-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text5;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.semiBold;
});
exports.SectionLabelName = SectionLabelName;
var SectionLabelDetail = (0, _styledComponents["default"])(_components.Text).withConfig({
  displayName: "Section__SectionLabelDetail",
  componentId: "sc-cfbkz1-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: ", ";\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontWeights.normal;
});
exports.SectionLabelDetail = SectionLabelDetail;
var TreeArrowIcon = (0, _styledComponents["default"])(_components.Icon).withConfig({
  displayName: "Section__TreeArrowIcon",
  componentId: "sc-cfbkz1-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  transform: ", ";\n  transition: transform 90ms ease-out;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.text1;
}, function (_ref7) {
  var open = _ref7.open;
  return open ? 'rotate(0deg)' : 'rotate(-90deg)';
});
var SectionContent = (0, _styledComponents["default"])(_components.Box).withConfig({
  displayName: "Section__SectionContent",
  componentId: "sc-cfbkz1-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.SectionContent = SectionContent;
var SectionLabel = (0, _styledComponents["default"])(_components.Flex).withConfig({
  displayName: "Section__SectionLabel",
  componentId: "sc-cfbkz1-4"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  padding: 0 ", ";\n  background: ", ";\n  height: 36px;\n  top: 0;\n  z-index: 1; /* Fixes bleed through of transformed caret icon */\n\n  &:hover {\n    background: ", ";\n  }\n\n  /* highlighting for search results */\n  b {\n    color: ", ";\n    text-decoration: ", ";\n    font-weight: ", ";\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.small;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.background;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.ui1;
}, function (_ref11) {
  var disabled = _ref11.disabled,
    theme = _ref11.theme;
  return disabled ? undefined : theme.colors.text5;
}, function (_ref12) {
  var disabled = _ref12.disabled;
  return disabled ? undefined : 'underline';
}, function (_ref13) {
  var disabled = _ref13.disabled,
    theme = _ref13.theme;
  return disabled ? undefined : theme.fontWeights.semiBold;
});
exports.SectionLabel = SectionLabel;
var Section = (0, _styledComponents["default"])(SectionFactory).withConfig({
  displayName: "Section",
  componentId: "sc-cfbkz1-5"
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  ", " {\n    ", " {\n      height: 30px;\n      padding: 0 ", ";\n      position: initial;\n    }\n\n    ", " {\n      font-weight: ", ";\n    }\n  }\n"])), function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.text3;
}, SectionContent, SectionLabel, function (_ref15) {
  var theme = _ref15.theme;
  return theme.space.xxsmall;
}, SectionLabelName, function (_ref16) {
  var theme = _ref16.theme;
  return theme.fontWeights.normal;
});
exports.Section = Section;
//# sourceMappingURL=Section.js.map