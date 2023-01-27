"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sanitize_string = require("./sanitize_string");
Object.keys(_sanitize_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sanitize_string[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sanitize_string[key];
    }
  });
});
//# sourceMappingURL=index.js.map