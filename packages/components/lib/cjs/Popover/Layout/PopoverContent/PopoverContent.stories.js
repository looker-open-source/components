"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CustomPadding = exports.Basic = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Constitution = require("../../../fixtures/Constitution");

var _PopoverContent = require("./PopoverContent");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverContent.PopoverContent,
  title: 'PopoverContent'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return _react["default"].createElement(_PopoverContent.PopoverContent, args, _react["default"].createElement(_Constitution.ConstitutionShort, {
    fontSize: "small"
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
var CustomPadding = Template.bind({});
exports.CustomPadding = CustomPadding;
CustomPadding.args = {
  pb: 'u3',
  pt: 'u8',
  px: 'u3'
};
//# sourceMappingURL=PopoverContent.stories.js.map