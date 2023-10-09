"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Text = require("./Text");
Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Text[key];
    }
  });
});
var _TextBase = require("./TextBase");
Object.keys(_TextBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextBase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextBase[key];
    }
  });
});
//# sourceMappingURL=index.js.map