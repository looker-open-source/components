"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Core = require("./Core");

Object.keys(_Core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Core[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Core[key];
    }
  });
});
//# sourceMappingURL=index.js.map