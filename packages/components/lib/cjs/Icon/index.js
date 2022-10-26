"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = require("./Icon");

Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Icon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icon[key];
    }
  });
});

var _IconPlaceholder = require("./IconPlaceholder");

Object.keys(_IconPlaceholder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IconPlaceholder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconPlaceholder[key];
    }
  });
});
//# sourceMappingURL=index.js.map