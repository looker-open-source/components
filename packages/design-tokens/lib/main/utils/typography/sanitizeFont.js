"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeFontFamilyArray = exports.sanitizeFontFamily = exports.sanitizeFontFace = void 0;

var sanitizeFontFamily = function sanitizeFontFamily(faces) {
  return sanitizeFontFamilyArray(faces).join(', ');
};
exports.sanitizeFontFamily = sanitizeFontFamily;
var sanitizeFontFamilyArray = function sanitizeFontFamilyArray(faces) {
  return faces.split(',').map(function (face) {
    return sanitizeFontFace(face);
  });
};
exports.sanitizeFontFamilyArray = sanitizeFontFamilyArray;
var sanitizeFontFace = function sanitizeFontFace(face) {
  var sanitized = face.replace(/["']/g, '').trim();
  return /\s/.test(sanitized) ? "'".concat(sanitized, "'") : sanitized;
};
exports.sanitizeFontFace = sanitizeFontFace;
//# sourceMappingURL=sanitizeFont.js.map