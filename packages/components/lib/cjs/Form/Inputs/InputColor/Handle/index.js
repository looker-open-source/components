"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Handle = require("./Handle");

Object.keys(_Handle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Handle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Handle[key];
    }
  });
});

var _Handle2d = require("./Handle2d");

Object.keys(_Handle2d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Handle2d[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Handle2d[key];
    }
  });
});
//# sourceMappingURL=index.js.map