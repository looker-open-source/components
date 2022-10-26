"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Year = require("./Year");

Object.keys(_Year).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Year[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Year[key];
    }
  });
});
//# sourceMappingURL=index.js.map