"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _EmbedEditor = require("./EmbedEditor");
Object.keys(_EmbedEditor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EmbedEditor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EmbedEditor[key];
    }
  });
});
//# sourceMappingURL=index.js.map