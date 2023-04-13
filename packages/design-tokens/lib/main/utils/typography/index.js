"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  googleFontUrl: true,
  generateFontFamilies: true
};
Object.defineProperty(exports, "generateFontFamilies", {
  enumerable: true,
  get: function get() {
    return _generateFontFamilies.generateFontFamilies;
  }
});
Object.defineProperty(exports, "googleFontUrl", {
  enumerable: true,
  get: function get() {
    return _googleFontUrl.googleFontUrl;
  }
});
var _googleFontUrl = require("./googleFontUrl");
var _generateFontFamilies = require("./generateFontFamilies");
var _sanitizeFont = require("./sanitizeFont");
Object.keys(_sanitizeFont).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sanitizeFont[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sanitizeFont[key];
    }
  });
});
//# sourceMappingURL=index.js.map