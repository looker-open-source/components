"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnorderedList = require("./UnorderedList");

Object.keys(_UnorderedList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UnorderedList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UnorderedList[key];
    }
  });
});
//# sourceMappingURL=index.js.map