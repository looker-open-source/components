"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SingleNumberInput = require("./SingleNumberInput");

Object.keys(_SingleNumberInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SingleNumberInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SingleNumberInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map