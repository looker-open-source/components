"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconPlaceholder = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var IconPlaceholder = _styledComponents["default"].div.attrs(function () {
  return {
    'aria-hidden': true
  };
}).withConfig({
  displayName: "IconPlaceholder",
  componentId: "sc-6zxa2i-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"])), _designTokens.size, _designTokens.space);

exports.IconPlaceholder = IconPlaceholder;
//# sourceMappingURL=IconPlaceholder.js.map