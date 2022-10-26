"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Query = require("./Query");

Object.keys(_Query).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Query[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Query[key];
    }
  });
});
//# sourceMappingURL=index.js.map