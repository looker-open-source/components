"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Animate = require("./Animate");

Object.keys(_Animate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Animate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Animate[key];
    }
  });
});
//# sourceMappingURL=index.js.map