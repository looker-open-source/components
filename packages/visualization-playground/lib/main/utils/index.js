"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sortObjectByKeys = require("./sortObjectByKeys");
Object.keys(_sortObjectByKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sortObjectByKeys[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sortObjectByKeys[key];
    }
  });
});
var _useLocalStorage = require("./useLocalStorage");
Object.keys(_useLocalStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLocalStorage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useLocalStorage[key];
    }
  });
});
//# sourceMappingURL=index.js.map