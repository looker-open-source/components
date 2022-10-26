"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagList = require("./TagList");

Object.keys(_TagList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TagList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TagList[key];
    }
  });
});
//# sourceMappingURL=index.js.map