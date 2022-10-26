"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Portal = require("./Portal");

Object.keys(_Portal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Portal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Portal[key];
    }
  });
});
//# sourceMappingURL=index.js.map