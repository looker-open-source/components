"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VisWrapper = require("./VisWrapper");

Object.keys(_VisWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _VisWrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VisWrapper[key];
    }
  });
});
//# sourceMappingURL=index.js.map