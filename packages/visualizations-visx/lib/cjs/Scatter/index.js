"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Scatter = require("./Scatter");

Object.keys(_Scatter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Scatter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Scatter[key];
    }
  });
});
//# sourceMappingURL=index.js.map