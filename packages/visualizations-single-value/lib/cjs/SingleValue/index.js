"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SingleValue = require("./SingleValue");

Object.keys(_SingleValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SingleValue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SingleValue[key];
    }
  });
});
//# sourceMappingURL=index.js.map