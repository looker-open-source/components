"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LocationExact = require("./LocationExact");

Object.keys(_LocationExact).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LocationExact[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LocationExact[key];
    }
  });
});
//# sourceMappingURL=index.js.map