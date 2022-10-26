"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldRadio = require("./FieldRadio");

Object.keys(_FieldRadio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldRadio[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldRadio[key];
    }
  });
});
//# sourceMappingURL=index.js.map