"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButtonIconSizeMap = exports.buttonSizeMap = exports.buttonSize = exports.buttonPadding = exports.buttonIconSizeMap = void 0;

var _designTokens = require("@looker/design-tokens");

var buttonSizeMap = {
  xxsmall: 20,
  xsmall: 24,
  small: 28,
  medium: 36,
  large: 44
};
exports.buttonSizeMap = buttonSizeMap;
var iconButtonIconSizeMap = {
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'small',
  large: 'medium'
};
exports.iconButtonIconSizeMap = iconButtonIconSizeMap;
var buttonIconSizeMap = {
  xxsmall: 'xxxsmall',
  xsmall: 'xxxsmall',
  small: 'xxsmall',
  medium: 'xsmall',
  large: 'small'
};
exports.buttonIconSizeMap = buttonIconSizeMap;

var buttonPadding = function buttonPadding(hasIcon, size) {
  switch (size) {
    case 'xxsmall':
      return 'xsmall';

    case 'xsmall':
      return 'small';

    case 'small':
      return hasIcon ? 'small' : 'large';

    case 'medium':
    case 'large':
    default:
      return hasIcon ? 'medium' : '1.5rem';
  }
};

exports.buttonPadding = buttonPadding;
var buttonSize = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xxsmall',
      height: "".concat(buttonSizeMap.xxsmall, "px")
    },
    xsmall: {
      fontSize: 'xxsmall',
      height: "".concat(buttonSizeMap.xsmall, "px")
    },
    small: {
      fontSize: 'xsmall',
      height: "".concat(buttonSizeMap.small, "px")
    },
    medium: {
      fontSize: 'small',
      height: "".concat(buttonSizeMap.medium, "px")
    },
    large: {
      fontSize: 'large',
      height: "".concat(buttonSizeMap.large, "px")
    }
  }
});
exports.buttonSize = buttonSize;
//# sourceMappingURL=size.js.map