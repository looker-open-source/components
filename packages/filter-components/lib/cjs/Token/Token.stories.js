"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Long = exports.IsEmpty = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _Token = require("./Token");

var _default = {
  title: 'Filters / Token',
  component: _Token.Token
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Token.Token, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  label: 'is any time'
};
var IsEmpty = Template.bind({});
exports.IsEmpty = IsEmpty;
IsEmpty.args = {
  label: 'More',
  isEmpty: true
};
var Long = Template.bind({});
exports.Long = Long;
Long.args = {
  label: 'is from 2022/01/01 until 2022/01/31 or is from 2022/03/01 until 2022/03/31'
};
//# sourceMappingURL=Token.stories.js.map