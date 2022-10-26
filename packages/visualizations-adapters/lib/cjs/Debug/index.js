"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Debug = require("./Debug");

Object.keys(_Debug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Debug[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Debug[key];
    }
  });
});
//# sourceMappingURL=index.js.map