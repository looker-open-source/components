"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = require("./Layout");

Object.keys(_Layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Layout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Layout[key];
    }
  });
});
//# sourceMappingURL=index.js.map