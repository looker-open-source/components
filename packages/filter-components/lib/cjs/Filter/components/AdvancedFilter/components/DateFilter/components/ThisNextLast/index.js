"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ThisNextLast = require("./ThisNextLast");

Object.keys(_ThisNextLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ThisNextLast[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ThisNextLast[key];
    }
  });
});
//# sourceMappingURL=index.js.map