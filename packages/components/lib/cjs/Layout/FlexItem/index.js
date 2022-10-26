"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FlexItem = require("./FlexItem");

Object.keys(_FlexItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FlexItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FlexItem[key];
    }
  });
});
//# sourceMappingURL=index.js.map