"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateFormat = require("./DateFormat");

Object.keys(_DateFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DateFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DateFormat[key];
    }
  });
});
//# sourceMappingURL=index.js.map