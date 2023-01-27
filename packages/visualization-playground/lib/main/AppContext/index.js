"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _AppContext = require("./AppContext");
Object.keys(_AppContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AppContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AppContext[key];
    }
  });
});
//# sourceMappingURL=index.js.map