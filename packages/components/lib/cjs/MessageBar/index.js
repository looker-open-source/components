"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MessageBar = require("./MessageBar");

Object.keys(_MessageBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MessageBar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MessageBar[key];
    }
  });
});
//# sourceMappingURL=index.js.map