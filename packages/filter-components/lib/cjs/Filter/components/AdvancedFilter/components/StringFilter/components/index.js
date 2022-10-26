"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MultiStringInput = require("./MultiStringInput");

Object.keys(_MultiStringInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MultiStringInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MultiStringInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map