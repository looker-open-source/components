"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SelectOptions = require("./SelectOptions");
Object.keys(_SelectOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SelectOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SelectOptions[key];
    }
  });
});
var _SelectOptionDetail = require("./SelectOptionDetail");
Object.keys(_SelectOptionDetail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SelectOptionDetail[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SelectOptionDetail[key];
    }
  });
});
//# sourceMappingURL=index.js.map