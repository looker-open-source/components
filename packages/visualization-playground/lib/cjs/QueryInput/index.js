"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QueryInput = require("./QueryInput");

Object.keys(_QueryInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _QueryInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _QueryInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map