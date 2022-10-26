"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Line = require("./Line");

Object.keys(_Line).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Line[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Line[key];
    }
  });
});
//# sourceMappingURL=index.js.map