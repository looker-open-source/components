"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OnDate = require("./OnDate");

Object.keys(_OnDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OnDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OnDate[key];
    }
  });
});
//# sourceMappingURL=index.js.map