"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizeInfersTruncate = exports.columnSize = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var sizeInfersTruncate = function sizeInfersTruncate(size) {
  return size && typeof size !== 'number' && !['auto', 'nowrap'].includes(size);
};
exports.sizeInfersTruncate = sizeInfersTruncate;
var columnSizeVariants = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    small: {
      maxWidth: '3rem',
      minWidth: '3rem'
    },
    medium: {
      maxWidth: '12rem',
      minWidth: '12rem'
    },
    large: {
      maxWidth: '20rem',
      minWidth: '20rem'
    },
    nowrap: {
      whiteSpace: 'nowrap'
    }
  }
});
var percentWidth = function percentWidth(width) {
  return "width: ".concat(width, "%;");
};
var columnSize = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var size = _ref.size;
  return size && typeof size === 'number' ? percentWidth(size) : columnSizeVariants;
});
exports.columnSize = columnSize;
//# sourceMappingURL=columnSize.js.map