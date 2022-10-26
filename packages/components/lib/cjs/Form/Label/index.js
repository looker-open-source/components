"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Label = require("./Label");

Object.keys(_Label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Label[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Label[key];
    }
  });
});
//# sourceMappingURL=index.js.map