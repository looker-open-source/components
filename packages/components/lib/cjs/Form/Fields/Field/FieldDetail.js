"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldDetail = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../../../Text");

var _templateObject;

var FieldDetail = (0, _styledComponents["default"])(_Text.Span).attrs(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'inherit' : _ref$color;
  return {
    color: color,
    fontSize: 'xsmall',
    lineHeight: 'xsmall'
  };
}).withConfig({
  displayName: "FieldDetail",
  componentId: "sc-1uti41v-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  white-space: nowrap;\n"])));
exports.FieldDetail = FieldDetail;
//# sourceMappingURL=FieldDetail.js.map