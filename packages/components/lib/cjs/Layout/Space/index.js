"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Space = require("./Space");

Object.keys(_Space).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Space[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Space[key];
    }
  });
});

var _SpaceVertical = require("./SpaceVertical");

Object.keys(_SpaceVertical).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SpaceVertical[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SpaceVertical[key];
    }
  });
});
//# sourceMappingURL=index.js.map