"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ShowRowTotals = require("./ShowRowTotals");

Object.keys(_ShowRowTotals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ShowRowTotals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ShowRowTotals[key];
    }
  });
});
//# sourceMappingURL=index.js.map