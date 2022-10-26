"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spinner = require("./Spinner");

Object.keys(_Spinner).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Spinner[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Spinner[key];
    }
  });
});
//# sourceMappingURL=index.js.map