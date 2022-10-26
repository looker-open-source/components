"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputHidden = require("./InputHidden");

Object.keys(_InputHidden).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputHidden[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputHidden[key];
    }
  });
});
//# sourceMappingURL=index.js.map