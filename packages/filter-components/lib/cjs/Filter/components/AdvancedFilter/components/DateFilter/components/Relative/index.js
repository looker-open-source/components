"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Relative = require("./Relative");

Object.keys(_Relative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Relative[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Relative[key];
    }
  });
});
//# sourceMappingURL=index.js.map