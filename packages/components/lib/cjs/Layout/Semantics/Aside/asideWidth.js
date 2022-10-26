"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asideWidth = exports.asideSizes = void 0;

var _designTokens = require("@looker/design-tokens");

var asideSizes = {
  rail: '3.5rem',
  navigation: '16rem',
  sidebar: '20rem'
};
exports.asideSizes = asideSizes;
var asideWidth = (0, _designTokens.system)({
  width: {
    property: 'width',
    scale: 'asideSizes',
    defaultScale: asideSizes
  }
});
exports.asideWidth = asideWidth;
//# sourceMappingURL=asideWidth.js.map