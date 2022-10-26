"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Truncate = require("./Truncate");

Object.keys(_Truncate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Truncate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Truncate[key];
    }
  });
});
//# sourceMappingURL=index.js.map