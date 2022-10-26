"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Breakpoint = require("./Breakpoint");

Object.keys(_Breakpoint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Breakpoint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Breakpoint[key];
    }
  });
});
//# sourceMappingURL=index.js.map