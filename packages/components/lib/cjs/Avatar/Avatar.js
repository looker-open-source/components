"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avatarCSS = exports.avatarButtonOverrides = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

var size = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xsmall',
      height: '24px',
      width: '24px'
    },
    xsmall: {
      fontSize: 'xsmall',
      height: '32px',
      width: '32px'
    },
    small: {
      fontSize: 'small',
      height: '40px',
      width: '40px'
    },
    medium: {
      fontSize: 'medium',
      height: '54px',
      width: '54px'
    },
    large: {
      fontSize: 'large',
      height: '60px',
      width: '60px'
    }
  }
});
var avatarButtonOverrides = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  /* Need this in case Avatar is rendered as a <button /> */\n  background: transparent;\n  border: none;\n  padding: 0;\n"])));
exports.avatarButtonOverrides = avatarButtonOverrides;
var avatarCSS = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  border-radius: 100%;\n  display: grid;\n  flex-shrink: 0;\n  justify-items: center;\n  overflow: hidden;\n\n  &:focus {\n    outline: none;\n  }\n"])), _designTokens.reset, avatarButtonOverrides, _designTokens.color, _designTokens.space, _designTokens.typography, size);
exports.avatarCSS = avatarCSS;
//# sourceMappingURL=Avatar.js.map