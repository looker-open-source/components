"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BulkActions = require("./BulkActions");

Object.keys(_BulkActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BulkActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BulkActions[key];
    }
  });
});
//# sourceMappingURL=index.js.map