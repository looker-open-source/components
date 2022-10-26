"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OrderedList = require("./OrderedList");

Object.keys(_OrderedList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OrderedList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OrderedList[key];
    }
  });
});
//# sourceMappingURL=index.js.map