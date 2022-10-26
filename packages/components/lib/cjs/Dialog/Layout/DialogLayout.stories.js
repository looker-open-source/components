"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoPadding = exports.HeaderDetail = exports.HeaderCloseButton = exports.Header = exports.Full = exports.FooterSecondary = exports.Footer = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Constitution = require("../../fixtures/Constitution");

var _Layout = require("../../Layout");

var _DialogLayout = require("./DialogLayout");

var _DialogContent = require("./DialogContent");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_Layout.Box2, {
    bg: "ui1"
  }, _react["default"].createElement(_DialogLayout.DialogLayout, args, _react["default"].createElement(_Constitution.ConstitutionShort, null)));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Header = Template.bind({});
exports.Header = Header;
Header.args = {
  header: 'Header text'
};
var Footer = Template.bind({});
exports.Footer = Footer;
Footer.args = {
  footer: 'Footer text'
};
var Full = Template.bind({});
exports.Full = Full;
Full.args = _objectSpread(_objectSpread({}, Footer.args), Header.args);
var HeaderDetail = Template.bind({});
exports.HeaderDetail = HeaderDetail;
HeaderDetail.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  headerDetail: 'Cancel'
});
var HeaderCloseButton = Template.bind({});
exports.HeaderCloseButton = HeaderCloseButton;
HeaderCloseButton.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  headerCloseButton: true
});
var FooterSecondary = Template.bind({});
exports.FooterSecondary = FooterSecondary;
FooterSecondary.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  footerSecondary: 'Cancel'
});

var NoPadding = function NoPadding() {
  return _react["default"].createElement(_Layout.Box2, {
    bg: "ui1"
  }, _react["default"].createElement(_DialogContent.DialogContent, {
    hasFooter: false,
    hasHeader: false
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null)));
};

exports.NoPadding = NoPadding;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _DialogLayout.DialogLayout,
  title: 'DialogLayout'
};
exports["default"] = _default;
//# sourceMappingURL=DialogLayout.stories.js.map