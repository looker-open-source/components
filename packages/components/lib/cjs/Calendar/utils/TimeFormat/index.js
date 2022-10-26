"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimeFormat = require("./TimeFormat");

Object.keys(_TimeFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TimeFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TimeFormat[key];
    }
  });
});
//# sourceMappingURL=index.js.map