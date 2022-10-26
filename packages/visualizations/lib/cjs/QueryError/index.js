"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QueryError = require("./QueryError");

Object.keys(_QueryError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _QueryError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _QueryError[key];
    }
  });
});
//# sourceMappingURL=index.js.map