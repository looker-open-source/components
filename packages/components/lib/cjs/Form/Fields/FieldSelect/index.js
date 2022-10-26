"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldSelect = require("./FieldSelect");

Object.keys(_FieldSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldSelect[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldSelect[key];
    }
  });
});
//# sourceMappingURL=index.js.map