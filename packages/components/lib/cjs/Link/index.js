"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Link = require("./Link");

Object.keys(_Link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Link[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Link[key];
    }
  });
});
//# sourceMappingURL=index.js.map