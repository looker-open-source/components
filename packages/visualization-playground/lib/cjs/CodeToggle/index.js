"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CodeToggle = require("./CodeToggle");

Object.keys(_CodeToggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CodeToggle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeToggle[key];
    }
  });
});
//# sourceMappingURL=index.js.map