"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderHelper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = require("styled-components");
var _system = require("../system");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var borderPropertyHelper = function borderPropertyHelper(color, property) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ": 1px solid\n    ", ";\n"])), property, function (_ref) {
    var theme = _ref.theme;
    return theme.colors[color] || color;
  });
};
var borderPositionHelper = function borderPositionHelper(border, position) {
  var color = border === true ? 'ui2' : border;
  if (color === 'none' || !color) return null;
  var properties = [];
  switch (position) {
    case 'x':
      properties = ['border-left', 'border-right'];
      break;
    case 'y':
      properties = ['border-bottom', 'border-top'];
      break;
    case undefined:
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        ", "\n      "])), borderPropertyHelper(color, 'border'));
    default:
      properties = ["border-".concat(position)];
  }
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), properties.map(function (property) {
    return borderPropertyHelper(color, property);
  }));
};
var borderHelper = function borderHelper(_ref2) {
  var border = _ref2.border,
    borderBottom = _ref2.borderBottom,
    borderLeft = _ref2.borderLeft,
    borderRight = _ref2.borderRight,
    borderTop = _ref2.borderTop,
    borderX = _ref2.borderX,
    borderY = _ref2.borderY;
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), border && borderPositionHelper(border), borderBottom && borderPositionHelper(borderBottom, 'bottom'), borderLeft && borderPositionHelper(borderLeft, 'left'), borderRight && borderPositionHelper(borderRight, 'right'), borderTop && borderPositionHelper(borderTop, 'top'), borderX && borderPositionHelper(borderX, 'x'), borderY && borderPositionHelper(borderY, 'y'), _system.borderRadius);
};
exports.borderHelper = borderHelper;
//# sourceMappingURL=semanticBorderHelper.js.map