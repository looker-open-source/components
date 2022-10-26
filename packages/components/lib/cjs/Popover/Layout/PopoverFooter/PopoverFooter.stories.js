"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FooterWithChildren = exports.FooterClose = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _ButtonTransparent = require("../../../Button/ButtonTransparent");

var _PopoverFooter = require("./PopoverFooter");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverFooter.PopoverFooter,
  title: 'PopoverFooter'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_PopoverFooter.PopoverFooter, null);
};

exports.Basic = Basic;

var FooterWithChildren = function FooterWithChildren() {
  return _react["default"].createElement(_PopoverFooter.PopoverFooter, null, _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Cancel"));
};

exports.FooterWithChildren = FooterWithChildren;

var FooterClose = function FooterClose() {
  return _react["default"].createElement(_PopoverFooter.PopoverFooter, {
    closeButton: "Close"
  });
};

exports.FooterClose = FooterClose;
FooterClose.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=PopoverFooter.stories.js.map