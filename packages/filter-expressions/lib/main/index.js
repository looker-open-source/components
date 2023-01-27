"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _grammars = require("./grammars");
Object.keys(_grammars).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _grammars[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _grammars[key];
    }
  });
});
var _locales = require("./locales");
Object.keys(_locales).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _locales[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _locales[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
//# sourceMappingURL=index.js.map