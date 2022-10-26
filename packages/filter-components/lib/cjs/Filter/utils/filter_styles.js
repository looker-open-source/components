"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenStylePlaceholder = exports.multiInputWidth = exports.inputPlacementStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

var multiInputWidth = 280;
exports.multiInputWidth = multiInputWidth;
var flatBorderRight = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  &:not(:focus-within) {\n    border-right-color: transparent;\n  }\n"])));
var flatBorderLeft = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n"])));

var inputPlacementStyle = function inputPlacementStyle(_ref) {
  var placement = _ref.placement;

  switch (placement) {
    case 'left':
      return "\n      ".concat(flatBorderRight, "\n    ");

    case 'right':
      return "\n      ".concat(flatBorderLeft, "\n    ");

    case 'middle':
      return "\n      ".concat(flatBorderLeft, "\n      ").concat(flatBorderRight, "\n    ");

    default:
      return '';
  }
};

exports.inputPlacementStyle = inputPlacementStyle;

var tokenStylePlaceholder = function tokenStylePlaceholder(props) {
  return props.tokenStyle ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        input::placeholder {\n          color: ", ";\n        }\n      "])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.text3;
  }) : '';
};

exports.tokenStylePlaceholder = tokenStylePlaceholder;
//# sourceMappingURL=filter_styles.js.map