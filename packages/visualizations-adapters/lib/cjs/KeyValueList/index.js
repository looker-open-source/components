"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _KeyValueList = require("./KeyValueList");

Object.keys(_KeyValueList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _KeyValueList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _KeyValueList[key];
    }
  });
});
//# sourceMappingURL=index.js.map