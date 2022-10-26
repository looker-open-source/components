"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MultiInput = require("./MultiInput");

Object.keys(_MultiInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MultiInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MultiInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map