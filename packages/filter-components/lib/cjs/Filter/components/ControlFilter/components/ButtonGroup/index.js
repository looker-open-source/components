"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ButtonGroup = require("./ButtonGroup");

Object.keys(_ButtonGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonGroup[key];
    }
  });
});
//# sourceMappingURL=index.js.map