"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ShowTotals = require("./ShowTotals");

Object.keys(_ShowTotals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ShowTotals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ShowTotals[key];
    }
  });
});
//# sourceMappingURL=index.js.map