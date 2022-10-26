"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateRange = require("./DateRange");

Object.keys(_DateRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DateRange[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DateRange[key];
    }
  });
});
//# sourceMappingURL=index.js.map