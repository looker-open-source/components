"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _TextBase = require("./TextBase");

var _truncate = require("./truncate");

var _templateObject;

var headingLevelFontSize = function headingLevelFontSize(as) {
  switch (as) {
    case 'h1':
      return 'xxlarge';

    case 'h3':
      return 'large';

    case 'h4':
      return 'medium';

    case 'h5':
      return 'small';

    case 'h6':
      return 'xsmall';

    case 'h2':
    default:
      return 'xlarge';
  }
};

var headingLineHeight = function headingLineHeight(as, fontSize) {
  return fontSize || headingLevelFontSize(as);
};

var Heading = (0, _styledComponents["default"])(_TextBase.TextBase).attrs(function (_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'h2' : _ref$as,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'title' : _ref$color,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'brand' : _ref$fontFamily,
      fontSize = _ref.fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
      lineHeight = _ref.lineHeight;
  return {
    as: as,
    color: color,
    fontFamily: fontFamily,
    fontSize: fontSize || headingLevelFontSize(as),
    fontWeight: fontWeight,
    lineHeight: lineHeight || headingLineHeight(as, fontSize)
  };
}).withConfig({
  displayName: "Heading",
  componentId: "sc-63s0tz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"])), _designTokens.textTransform, _truncate.truncateCSS);
exports.Heading = Heading;
//# sourceMappingURL=Heading.js.map