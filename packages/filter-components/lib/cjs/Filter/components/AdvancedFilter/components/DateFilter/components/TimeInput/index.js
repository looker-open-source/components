"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimeInput = require("./TimeInput");

Object.keys(_TimeInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TimeInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TimeInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map