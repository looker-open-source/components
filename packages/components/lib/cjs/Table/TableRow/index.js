"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableRow = require("./TableRow");

Object.keys(_TableRow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableRow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableRow[key];
    }
  });
});
//# sourceMappingURL=index.js.map