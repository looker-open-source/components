"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorBoundary = require("./ErrorBoundary");

Object.keys(_ErrorBoundary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ErrorBoundary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorBoundary[key];
    }
  });
});
//# sourceMappingURL=index.js.map