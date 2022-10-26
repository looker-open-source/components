"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BeforeAfter = require("./BeforeAfter");

Object.keys(_BeforeAfter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BeforeAfter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BeforeAfter[key];
    }
  });
});
//# sourceMappingURL=index.js.map