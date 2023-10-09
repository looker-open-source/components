"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldPicker = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _Tree = require("../../Tree");
var _2 = require("..");
var _FieldPickerItem = require("./FieldPickerItem");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var FieldGroupHeading = function FieldGroupHeading(props) {
  return _react["default"].createElement(_.Paragraph, _extends({
    color: "text1",
    fontSize: "xxsmall",
    fontWeight: "semiBold",
    pt: "medium",
    pb: "xxsmall",
    pl: "xxsmall",
    truncate: true,
    style: {
      lineHeight: '0.75rem'
    }
  }, props));
};
var fields = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Tree.TreeBranch, null, _react["default"].createElement(FieldGroupHeading, {
  pt: "none"
}, "DIMENSIONS")), _react["default"].createElement(_2.LkFieldGroupTree, {
  color: "dimension",
  selected: true,
  label: _react["default"].createElement(_.Box2, null, "Created")
}, _react["default"].createElement(_FieldPickerItem.FieldPickerItem, null, "Created Date"), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, {
  selected: true
}, "Created Month"), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, null, "Created Year")), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, null, "City"), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, {
  selected: true,
  filter: true
}, "This is a really long field name to show that truncation is working as desired. It's not a realistic example but it lets our tests know that things are working as-desired"), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, null, "ID"), _react["default"].createElement(_Tree.TreeBranch, null, _react["default"].createElement(FieldGroupHeading, {
  color: "measure"
}, "MEASURES")), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, {
  color: "measure",
  selected: true
}, "Sum"), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, {
  color: "measure",
  filter: true
}, "Max"), _react["default"].createElement(_Tree.TreeBranch, null, _react["default"].createElement(FieldGroupHeading, {
  color: "calculation"
}, "CALCULATED")), _react["default"].createElement(_FieldPickerItem.FieldPickerItem, {
  pivot: true,
  color: "calculation"
}, "Calc"));
var FieldPicker = function FieldPicker() {
  return _react["default"].createElement(_.Aside, null, _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_2.LkFieldViewTree, {
    defaultOpen: true,
    detail: 3,
    label: _react["default"].createElement("strong", null, "Orders")
  }, fields), _react["default"].createElement(_2.LkFieldViewTree, {
    label: _react["default"].createElement("strong", null, "Order Items")
  }, fields), _react["default"].createElement(_2.LkFieldViewTree, {
    label: _react["default"].createElement("strong", null, "Users")
  }, fields)));
};
exports.FieldPicker = FieldPicker;
//# sourceMappingURL=FieldPicker.js.map