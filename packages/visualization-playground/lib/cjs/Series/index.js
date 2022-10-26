"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Series = require("./Series");

Object.keys(_Series).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Series[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Series[key];
    }
  });
});
//# sourceMappingURL=index.js.map