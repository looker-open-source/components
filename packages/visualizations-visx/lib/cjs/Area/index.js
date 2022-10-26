"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Area = require("./Area");

Object.keys(_Area).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Area[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Area[key];
    }
  });
});
//# sourceMappingURL=index.js.map