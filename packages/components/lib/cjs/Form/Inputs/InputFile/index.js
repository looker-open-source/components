"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputFile = require("./InputFile");

Object.keys(_InputFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputFile[key];
    }
  });
});
//# sourceMappingURL=index.js.map