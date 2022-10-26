"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputSearch = require("./InputSearch");

Object.keys(_InputSearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputSearch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputSearch[key];
    }
  });
});
//# sourceMappingURL=index.js.map