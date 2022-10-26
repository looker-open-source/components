"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateTimeFormat = require("./DateTimeFormat");

Object.keys(_DateTimeFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DateTimeFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DateTimeFormat[key];
    }
  });
});
//# sourceMappingURL=index.js.map