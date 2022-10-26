"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Interval = require("./Interval");

Object.keys(_Interval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Interval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Interval[key];
    }
  });
});
//# sourceMappingURL=index.js.map