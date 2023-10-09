"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateCSS = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var textTruncate = function textTruncate(props) {
  var truncateLines = props.truncateLines;
  if (truncateLines && truncateLines > 1) {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */\n      -webkit-box-orient: vertical;\n      display: -webkit-box;\n      -webkit-line-clamp: ", ";\n      overflow: hidden;\n      /* stylelint-enable */\n    "])), truncateLines);
  }
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "])));
};
var truncateCSS = function truncateCSS(props) {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n  "])), props.truncate || props.truncateLines ? textTruncate : null);
};
exports.truncateCSS = truncateCSS;
//# sourceMappingURL=truncate.js.map