"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Positioning = require("./Positioning");

Object.keys(_Positioning).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Positioning[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Positioning[key];
    }
  });
});
//# sourceMappingURL=index.js.map