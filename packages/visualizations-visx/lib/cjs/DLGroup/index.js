"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DLGroup = require("./DLGroup");

Object.keys(_DLGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DLGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DLGroup[key];
    }
  });
});
//# sourceMappingURL=index.js.map