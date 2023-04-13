"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFacesToFamily = void 0;
var _sanitizeFont = require("./sanitizeFont");

var fontFacesToFamily = function fontFacesToFamily(faces, fallbacks) {
  var facesStr = typeof faces === 'string' ? faces : faces.join(',');
  return (0, _sanitizeFont.sanitizeFontFamily)("".concat(facesStr, ", ").concat(fallbacks.join(',')));
};
exports.fontFacesToFamily = fontFacesToFamily;
//# sourceMappingURL=fontFacesToFamily.js.map