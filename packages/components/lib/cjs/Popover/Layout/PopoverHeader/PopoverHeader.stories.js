"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HideClose = exports.Hidden = exports.Detail = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _PopoverHeader = require("./PopoverHeader");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverHeader.PopoverHeader,
  title: 'PopoverHeader'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_PopoverHeader.PopoverHeader, null, "Header Text");
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var Hidden = function Hidden() {
  return _react["default"].createElement(_PopoverHeader.PopoverHeader, {
    hidden: true
  }, "Header Text");
};

exports.Hidden = Hidden;
Hidden.parameters = {
  storyshots: {
    disable: true
  }
};

var HideClose = function HideClose() {
  return _react["default"].createElement(_PopoverHeader.PopoverHeader, {
    hideClose: true
  }, "Header Text");
};

exports.HideClose = HideClose;
HideClose.parameters = {
  storyshots: {
    disable: true
  }
};

var Detail = function Detail() {
  return _react["default"].createElement(_PopoverHeader.PopoverHeader, {
    detail: _react["default"].createElement("button", null, "close")
  }, "Header Text");
};

exports.Detail = Detail;
Detail.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=PopoverHeader.stories.js.map