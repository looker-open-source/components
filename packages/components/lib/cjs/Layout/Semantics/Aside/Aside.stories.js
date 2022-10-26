"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AsideWidthRail = exports.AsideWidthNavigation = exports.AsideDefaultWidthSidebar = exports.AsideDefaultBorderAndColor = exports.AsideCollapse = exports.AsideBorderY = exports.AsideBorderX = exports.AsideBorderTop = exports.AsideBorderRight = exports.AsideBorderLeft = exports.AsideBorderBottom = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _storybook = require("@looker/storybook");

var _Form = require("../../../Form");

var _utils = require("../../../utils");

var _Flex = require("../../Flex");

var _Aside = require("../Aside/Aside");

var _templateObject;

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Aside.Aside,
  title: 'Aside'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(AsideStyle, (0, _extends2["default"])({
    p: "u5",
    "text-align": "center"
  }, args));
};

var AsideStyle = (0, _styledComponents["default"])(_Aside.Aside).withConfig({
  displayName: "Asidestories__AsideStyle",
  componentId: "sc-vbbp60-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  /* stylelint-disable color-named */\n  background-color: lightsalmon;\n  height: 40rem;\n  padding-top: 3.5rem;\n  text-align: center;\n"])));
var AsideDefaultWidthSidebar = Template.bind({});
exports.AsideDefaultWidthSidebar = AsideDefaultWidthSidebar;
AsideDefaultWidthSidebar.args = {
  children: 'Sidebar'
};
var AsideWidthNavigation = Template.bind({});
exports.AsideWidthNavigation = AsideWidthNavigation;
AsideWidthNavigation.args = {
  children: 'Navigation',
  width: 'navigation'
};
var AsideWidthRail = Template.bind({});
exports.AsideWidthRail = AsideWidthRail;
AsideWidthRail.args = {
  children: 'Rail',
  width: 'rail'
};

var AsideCollapse = function AsideCollapse() {
  var _useToggle = (0, _utils.useToggle)(false),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  return _react["default"].createElement(_Flex.Flex, null, _react["default"].createElement(AsideStyle, {
    collapse: !value
  }, "Aside content"), _react["default"].createElement(_Form.FieldToggleSwitch, {
    m: "small",
    label: "Show Aside",
    onChange: toggle,
    on: value
  }));
};

exports.AsideCollapse = AsideCollapse;
AsideCollapse.parameters = {
  storyshots: {
    disable: true
  }
};

var TemplateBorder = function TemplateBorder(args) {
  return _react["default"].createElement(_Aside.Aside, (0, _extends2["default"])({
    p: "u5",
    "text-align": "center"
  }, args));
};

var AsideDefaultBorderAndColor = TemplateBorder.bind({});
exports.AsideDefaultBorderAndColor = AsideDefaultBorderAndColor;
AsideDefaultBorderAndColor.args = {
  border: true,
  children: 'Aside'
};
var AsideBorderBottom = TemplateBorder.bind({});
exports.AsideBorderBottom = AsideBorderBottom;
AsideBorderBottom.args = {
  borderBottom: 'key',
  children: 'border-bottom'
};
var AsideBorderLeft = TemplateBorder.bind({});
exports.AsideBorderLeft = AsideBorderLeft;
AsideBorderLeft.args = {
  borderLeft: 'key',
  children: 'border-left'
};
var AsideBorderRight = TemplateBorder.bind({});
exports.AsideBorderRight = AsideBorderRight;
AsideBorderRight.args = {
  borderRight: 'key',
  children: 'border-right'
};
var AsideBorderTop = TemplateBorder.bind({});
exports.AsideBorderTop = AsideBorderTop;
AsideBorderTop.args = {
  borderTop: 'key',
  children: 'border-top'
};
var AsideBorderX = TemplateBorder.bind({});
exports.AsideBorderX = AsideBorderX;
AsideBorderX.args = {
  borderX: 'key',
  children: 'border-left and border-right'
};
var AsideBorderY = TemplateBorder.bind({});
exports.AsideBorderY = AsideBorderY;
AsideBorderY.args = {
  borderY: 'key',
  children: 'border-bottom and border-top'
};
//# sourceMappingURL=Aside.stories.js.map