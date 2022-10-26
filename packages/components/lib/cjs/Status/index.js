"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Status = require("./Status");

Object.keys(_Status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Status[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Status[key];
    }
  });
});
//# sourceMappingURL=index.js.map