"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RelativeTimeframes = require("./RelativeTimeframes");

Object.keys(_RelativeTimeframes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RelativeTimeframes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RelativeTimeframes[key];
    }
  });
});
//# sourceMappingURL=index.js.map