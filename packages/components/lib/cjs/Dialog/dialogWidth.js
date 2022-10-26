"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogWidth = exports.dialogSizes = void 0;

var _designTokens = require("@looker/design-tokens");

var dialogSizes = {
  xxsmall: '16rem',
  xsmall: '21rem',
  small: '28rem',
  medium: '40rem',
  large: '50rem'
};
exports.dialogSizes = dialogSizes;
var dialogWidth = (0, _designTokens.system)({
  width: {
    property: 'width',
    scale: 'dialogSizes',
    defaultScale: dialogSizes
  }
});
exports.dialogWidth = dialogWidth;
//# sourceMappingURL=dialogWidth.js.map