"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CodeEditor = require("./CodeEditor");

Object.keys(_CodeEditor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CodeEditor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeEditor[key];
    }
  });
});
//# sourceMappingURL=index.js.map