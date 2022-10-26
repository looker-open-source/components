"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HideClose = exports.Detail = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _DialogHeader = require("./DialogHeader");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _DialogHeader.DialogHeader,
  title: 'DialogHeader'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_DialogHeader.DialogHeader, null, "Heading");
};

exports.Basic = Basic;

var HideClose = function HideClose() {
  return _react["default"].createElement(_DialogHeader.DialogHeader, {
    hideClose: true
  }, "Heading");
};

exports.HideClose = HideClose;

var Detail = function Detail() {
  return _react["default"].createElement(_DialogHeader.DialogHeader, {
    detail: "Detail text"
  }, "Heading");
};

exports.Detail = Detail;
Detail.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=DialogHeader.stories.js.map