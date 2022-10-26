"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Badge = require("./Badge");

Object.keys(_Badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Badge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Badge[key];
    }
  });
});
//# sourceMappingURL=index.js.map