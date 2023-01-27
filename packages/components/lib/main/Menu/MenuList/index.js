"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MenuList = require("./MenuList");
Object.keys(_MenuList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MenuList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuList[key];
    }
  });
});
//# sourceMappingURL=index.js.map