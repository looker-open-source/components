"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericColumnCSS = exports.getNumericColumnIndices = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _Space = require("../../Layout/Space");

var _ = require("..");

var _templateObject, _templateObject2;

function filterUndefined(t) {
  return t !== undefined;
}

var getNumericColumnIndices = function getNumericColumnIndices(columns, visibleColumns) {
  return columns.filter(function (c) {
    return visibleColumns.includes(c.id) || c.hide === undefined;
  }).map(function (c, index) {
    return c.type === 'number' ? index + 1 : undefined;
  }).filter(filterUndefined);
};

exports.getNumericColumnIndices = getNumericColumnIndices;

var numericColumnCSS = function numericColumnCSS(columnIndices) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), columnIndices.map(function (columnIndex) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n          ", ":nth-child(", ") {\n            text-align: right;\n            ", " {\n              flex-direction: row-reverse;\n            }\n          }\n        "])), _.DataTableCell, columnIndex + 1, _Space.SpaceVertical);
  }));
};

exports.numericColumnCSS = numericColumnCSS;
//# sourceMappingURL=dataTableFormatting.js.map