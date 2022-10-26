"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _YAxis = require("./YAxis");

Object.keys(_YAxis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _YAxis[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _YAxis[key];
    }
  });
});
//# sourceMappingURL=index.js.map