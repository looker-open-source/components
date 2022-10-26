"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pie = require("./Pie");

Object.keys(_Pie).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Pie[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Pie[key];
    }
  });
});
//# sourceMappingURL=index.js.map