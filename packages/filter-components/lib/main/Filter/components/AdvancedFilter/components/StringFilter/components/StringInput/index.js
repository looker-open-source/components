"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _StringInput = require("./StringInput");
Object.keys(_StringInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StringInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StringInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map