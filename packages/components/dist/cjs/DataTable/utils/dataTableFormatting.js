"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericColumnCSS = exports.getNumericColumnIndices = void 0;
var _styledComponents = require("styled-components");
var _Space = require("../../Layout/Space");
var _ = require("..");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), columnIndices.map(function (columnIndex) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          ", ":nth-child(", ") {\n            text-align: right;\n            ", " {\n              flex-direction: row-reverse;\n            }\n          }\n        "])), _.DataTableCell, columnIndex + 1, _Space.SpaceVertical);
  }));
};
exports.numericColumnCSS = numericColumnCSS;
//# sourceMappingURL=dataTableFormatting.js.map