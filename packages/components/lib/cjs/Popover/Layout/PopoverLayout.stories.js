"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoFooter = exports.HeaderHideHeading = exports.Header = exports.Full = exports.FooterCloseButton = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Constitution = require("../../fixtures/Constitution");

var _ButtonTransparent = require("../../Button/ButtonTransparent");

var _PopoverLayout = require("./PopoverLayout");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverLayout.PopoverLayout,
  title: 'PopoverLayout'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_PopoverLayout.PopoverLayout, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: _react["default"].createElement(_Constitution.ConstitutionShort, {
    fontSize: "small"
  })
};
var Header = Template.bind({});
exports.Header = Header;
Header.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  footer: false,
  header: 'Header text'
});
var FooterCloseButton = Template.bind({});
exports.FooterCloseButton = FooterCloseButton;
FooterCloseButton.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  closeButton: _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Close"),
  header: 'Header text'
});
var NoFooter = Template.bind({});
exports.NoFooter = NoFooter;
NoFooter.args = _objectSpread({
  footer: false
}, Basic.args);
NoFooter.parameters = {
  storyshots: {
    disable: true
  }
};
var Full = Template.bind({});
exports.Full = Full;
Full.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  footer: _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Cancel"),
  header: 'Header text'
});
var HeaderHideHeading = Template.bind({});
exports.HeaderHideHeading = HeaderHideHeading;
HeaderHideHeading.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  hideHeader: true
});
//# sourceMappingURL=PopoverLayout.stories.js.map