"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Placeholder = exports.ButtonText = exports.Basic = exports.Accepts = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _noop = _interopRequireDefault(require("lodash/noop"));

var _storybook = require("@looker/storybook");

var _InputFile = require("./InputFile");

var _excluded = ["handleFile"];
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputFile.InputFile,
  title: 'InputFile'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var handleFile = _ref.handleFile,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_InputFile.InputFile, (0, _extends2["default"])({
    handleFile: function handleFile() {
      return (0, _noop["default"])();
    }
  }, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'Placeholder'
};
var ButtonText = Template.bind({});
exports.ButtonText = ButtonText;
ButtonText.args = {
  buttonText: 'New Button Text'
};
var Accepts = Template.bind({});
exports.Accepts = Accepts;
Accepts.args = {
  accept: '.json',
  value: 'Accepts only .json files'
};
//# sourceMappingURL=InputFile.stories.js.map