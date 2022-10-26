"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Between = require("./Between");

Object.keys(_Between).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Between[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Between[key];
    }
  });
});
//# sourceMappingURL=index.js.map