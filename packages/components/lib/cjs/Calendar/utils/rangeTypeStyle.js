"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeTypeStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

var rangeTypeStyle = function rangeTypeStyle(_ref) {
  var rangePosition = _ref.rangePosition,
      rangeType = _ref.rangeType;
  if (rangeType === 'none' || !rangePosition) return '';

  if (rangeType === 'selected') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      background: ", ";\n    "])), function (_ref2) {
      var theme = _ref2.theme;
      return theme.colors.keyAccent;
    });
  }

  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    background-image: linear-gradient(\n        to right,\n        ", " 60%,\n        transparent 40%\n      ),\n      linear-gradient(\n        to right,\n        ", " 60%,\n        transparent 40%\n      );\n    background-position: left top, left bottom;\n    background-repeat: repeat-x, repeat-x;\n    background-size: 4px 1px, 4px 1px;\n  "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.ui4;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.ui4;
  });
};

exports.rangeTypeStyle = rangeTypeStyle;
//# sourceMappingURL=rangeTypeStyle.js.map