"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Marker = require("./Marker");

Object.keys(_Marker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Marker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Marker[key];
    }
  });
});
//# sourceMappingURL=index.js.map