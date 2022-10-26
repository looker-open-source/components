"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProgressCircular = require("./ProgressCircular");

Object.keys(_ProgressCircular).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ProgressCircular[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ProgressCircular[key];
    }
  });
});
//# sourceMappingURL=index.js.map