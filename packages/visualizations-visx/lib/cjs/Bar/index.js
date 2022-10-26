"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bar = require("./Bar");

Object.keys(_Bar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Bar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Bar[key];
    }
  });
});
//# sourceMappingURL=index.js.map