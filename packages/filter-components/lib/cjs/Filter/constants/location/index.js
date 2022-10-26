"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _long_lat = require("./long_lat");

Object.keys(_long_lat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _long_lat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _long_lat[key];
    }
  });
});
//# sourceMappingURL=index.js.map