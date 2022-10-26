"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sparkline = require("./Sparkline");

Object.keys(_Sparkline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Sparkline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Sparkline[key];
    }
  });
});
//# sourceMappingURL=index.js.map