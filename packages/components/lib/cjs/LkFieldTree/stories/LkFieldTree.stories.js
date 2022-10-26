"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = void 0;
Object.defineProperty(exports, "FieldPicker", {
  enumerable: true,
  get: function get() {
    return _FieldPicker.FieldPicker;
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Tree = require("../../Tree");

var _ = require("../");

var _FieldPicker = require("./FieldPicker");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.LkFieldTree,
  title: 'LkFieldTree'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, (0, _extends2["default"])({
    label: _react["default"].createElement("strong", null, "Orders")
  }, args), _react["default"].createElement(_.LkFieldTree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_.LkFieldItem, null, "ID"), _react["default"].createElement(_.LkFieldItem, null, "Status"), _react["default"].createElement(_.LkFieldTree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_.LkFieldItem, null, "Created Date"), _react["default"].createElement(_.LkFieldItem, null, "Created Month"), _react["default"].createElement(_.LkFieldItem, null, "Created Year"), _react["default"].createElement(_.LkFieldItem, null, "Created Quarter")))));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  defaultOpen: true
};
//# sourceMappingURL=LkFieldTree.stories.js.map