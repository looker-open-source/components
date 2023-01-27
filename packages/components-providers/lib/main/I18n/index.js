"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useI18n = require("./useI18n");
Object.keys(_useI18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useI18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useI18n[key];
    }
  });
});
//# sourceMappingURL=index.js.map