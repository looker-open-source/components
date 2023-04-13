"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateSections = void 0;
var _react = _interopRequireDefault(require("react"));
var _Field = require("../Field");
var _Section = require("../Section");

var generateSections = function generateSections(trees, depth, onSectionClick, onFieldClick) {
  return trees.map(function (tree) {
    return (
      tree.children ? tree.hide ? null : _react["default"].createElement(_Section.Section, {
        key: tree.id
        ,
        id: tree.id,
        detail: tree.detail,
        isOpen: !!tree.isOpen,
        onClick: onSectionClick,
        title: tree.label
      }, generateSections(tree.children, depth + 1, onSectionClick, onFieldClick)) : tree.hide ? null : _react["default"].createElement(_Field.Field, {
        key: tree.id,
        isSecondary: tree.isSecondary,
        detail: tree.detail,
        disabled: tree.disabled,
        displayLabel: tree.label,
        label: tree.value,
        payload: tree.payload,
        alignItems: "center",
        pl: "medium",
        onClick: onFieldClick
      })
    );
  });
};
exports.generateSections = generateSections;
//# sourceMappingURL=generate_sections.js.map