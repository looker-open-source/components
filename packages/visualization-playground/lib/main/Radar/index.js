"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Radar = require("./Radar");
Object.keys(_Radar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Radar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radar[key];
    }
  });
});
//# sourceMappingURL=index.js.map