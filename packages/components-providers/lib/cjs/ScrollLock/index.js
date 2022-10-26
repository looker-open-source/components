"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollLockProvider = require("./ScrollLockProvider");

Object.keys(_ScrollLockProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ScrollLockProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ScrollLockProvider[key];
    }
  });
});
//# sourceMappingURL=index.js.map