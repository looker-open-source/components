"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabletLayout = exports.Positioning = exports.MobileLayout = exports.DesktopLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = _interopRequireDefault(require("react"));

var _utilsStorybook = require("../../utils-storybook");

var _Icon = require("../../Icon");

var _Box = require("./Box");

var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  component: _Box.Box,
  title: 'Box'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var children = _ref.children,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Box.Box, args, children), _react["default"].createElement(_Box.Box, args, children));
};

var responsiveArgs = {
  border: true,
  borderRadius: 'medium',
  children: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Icon.Icon, {
    display: "inline-flex",
    icon: _react["default"].createElement(_materialOutlined.Home, null),
    size: "medium"
  }), " Looker"),
  color: 'key',
  display: ['block', 'inline-block'],
  fontFamily: 'brand',
  fontSize: ['small', 'large'],
  fontWeight: 'bold',
  height: ['100px', '200px', '50vh'],
  letterSpacing: '10',
  lineHeight: ['small', 'large'],
  m: ['none', null, 'u4', 'u8'],
  maxHeight: '500px',
  maxWidth: '500px',
  textAlign: ['left', 'center', 'right'],
  width: ['100px', '200px', '50vw']
};
var MobileLayout = Template.bind({});
exports.MobileLayout = MobileLayout;
MobileLayout.args = _objectSpread({}, responsiveArgs);
MobileLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'mobile',
    viewports: _utilsStorybook.VIEWPORT_MAP
  }
};
var TabletLayout = Template.bind({});
exports.TabletLayout = TabletLayout;
TabletLayout.args = _objectSpread({}, responsiveArgs);
TabletLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'tablet',
    viewports: _utilsStorybook.VIEWPORT_MAP
  }
};
var DesktopLayout = Template.bind({});
exports.DesktopLayout = DesktopLayout;
DesktopLayout.args = _objectSpread({}, responsiveArgs);
DesktopLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'desktop',
    viewports: _utilsStorybook.VIEWPORT_MAP
  }
};
var absolutePositioned = {
  alignContent: 'flex-end',
  alignItems: 'baseline',
  bg: 'key',
  children: _react["default"].createElement(_react["default"].Fragment, null, "A Box"),
  color: 'text1',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height: '50px',
  justifyContent: 'center',
  position: 'absolute',
  width: '50vw'
};

var Positioning = function Positioning() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Box.Box, (0, _extends2["default"])({}, absolutePositioned, {
    top: "1rem",
    left: "1rem"
  })), _react["default"].createElement(_Box.Box, {
    bg: "ui3",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    flexBasis: "1",
    display: "flex",
    order: "unset",
    height: "100vh"
  }, _react["default"].createElement(_Box.Box, {
    textAlign: "center"
  }, "Background box")), _react["default"].createElement(_Box.Box, (0, _extends2["default"])({}, absolutePositioned, {
    bottom: "1rem",
    right: "1rem"
  })));
};

exports.Positioning = Positioning;
Positioning.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'mobile',
    viewports: _utilsStorybook.VIEWPORT_MAP
  }
};
//# sourceMappingURL=Box.stories.js.map