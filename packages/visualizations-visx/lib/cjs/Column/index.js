"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Column = require("./Column");

Object.keys(_Column).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Column[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Column[key];
    }
  });
});
//# sourceMappingURL=index.js.map