"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Secondary = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _DialogFooter = require("./DialogFooter");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _DialogFooter.DialogFooter,
  title: 'DialogFooter'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_DialogFooter.DialogFooter, null, "Footer Text");
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var Secondary = function Secondary() {
  return _react["default"].createElement(_DialogFooter.DialogFooter, {
    secondary: _react["default"].createElement("button", null, "Done")
  }, "Footer Text");
};

exports.Secondary = Secondary;
Secondary.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=DialogFooter.stories.js.map