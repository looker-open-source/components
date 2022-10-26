"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Flex = require("./Flex");

Object.keys(_Flex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Flex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Flex[key];
    }
  });
});
//# sourceMappingURL=index.js.map