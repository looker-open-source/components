"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Overflow = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _ = require("../../..");

var _DialogContent = require("./DialogContent");

var Basic = function Basic() {
  return _react["default"].createElement(_DialogContent.DialogContent, null, _react["default"].createElement(_.Box2, {
    height: "2rem",
    bg: "rebeccapurple"
  }));
};

exports.Basic = Basic;

var Overflow = function Overflow() {
  return _react["default"].createElement(_.Box2, {
    height: "10rem",
    display: "flex",
    bg: "white",
    p: "u5"
  }, _react["default"].createElement(_DialogContent.DialogContent, null, _react["default"].createElement(_.Paragraph, null, "Scroll down here..."), _react["default"].createElement(_.Box2, {
    height: "12rem",
    bg: "rebeccapurple"
  })));
};

exports.Overflow = Overflow;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _DialogContent.DialogContent,
  title: 'DialogContent'
};
exports["default"] = _default;
//# sourceMappingURL=DialogContent.stories.js.map