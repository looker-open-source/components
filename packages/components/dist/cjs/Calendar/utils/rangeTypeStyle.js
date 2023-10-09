"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeTypeStyle = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var rangeTypeStyle = function rangeTypeStyle(_ref) {
  var rangePosition = _ref.rangePosition,
    rangeType = _ref.rangeType;
  if (rangeType === 'none' || !rangePosition) return '';
  if (rangeType === 'selected') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      background: ", ";\n    "])), function (_ref2) {
      var theme = _ref2.theme;
      return theme.colors.keyAccent;
    });
  }
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(\n        to right,\n        ", " 60%,\n        transparent 40%\n      ),\n      linear-gradient(\n        to right,\n        ", " 60%,\n        transparent 40%\n      );\n    background-position: left top, left bottom;\n    background-repeat: repeat-x, repeat-x;\n    background-size: 4px 1px, 4px 1px;\n  "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.ui4;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.ui4;
  });
};
exports.rangeTypeStyle = rangeTypeStyle;
//# sourceMappingURL=rangeTypeStyle.js.map