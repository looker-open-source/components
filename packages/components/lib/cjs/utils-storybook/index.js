"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewportMap = require("./viewportMap");

Object.keys(_viewportMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _viewportMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _viewportMap[key];
    }
  });
});
//# sourceMappingURL=index.js.map