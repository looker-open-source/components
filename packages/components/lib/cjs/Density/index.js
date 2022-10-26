"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Density = require("./Density");

Object.keys(_Density).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Density[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Density[key];
    }
  });
});
//# sourceMappingURL=index.js.map