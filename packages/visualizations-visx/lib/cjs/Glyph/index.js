"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Glyph = require("./Glyph");

Object.keys(_Glyph).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Glyph[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Glyph[key];
    }
  });
});
//# sourceMappingURL=index.js.map