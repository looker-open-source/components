"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require("./Box");

Object.keys(_Box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Box[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Box[key];
    }
  });
});
//# sourceMappingURL=index.js.map