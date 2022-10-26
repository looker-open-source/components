"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FilterCollection = require("./FilterCollection");

Object.keys(_FilterCollection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FilterCollection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FilterCollection[key];
    }
  });
});
//# sourceMappingURL=index.js.map