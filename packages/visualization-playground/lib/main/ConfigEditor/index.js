"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ConfigEditor = require("./ConfigEditor");
Object.keys(_ConfigEditor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ConfigEditor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConfigEditor[key];
    }
  });
});
//# sourceMappingURL=index.js.map