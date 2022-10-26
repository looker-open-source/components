"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogHeader = require("./DialogHeader");

Object.keys(_DialogHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DialogHeader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DialogHeader[key];
    }
  });
});
//# sourceMappingURL=index.js.map