"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RelativeTimeframePresets = require("./RelativeTimeframePresets");

Object.keys(_RelativeTimeframePresets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RelativeTimeframePresets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RelativeTimeframePresets[key];
    }
  });
});
//# sourceMappingURL=index.js.map