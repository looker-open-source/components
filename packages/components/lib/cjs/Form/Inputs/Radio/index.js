"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = require("./Radio");

Object.keys(_Radio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Radio[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radio[key];
    }
  });
});
//# sourceMappingURL=index.js.map