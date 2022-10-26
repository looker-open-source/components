"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldSelectMulti = require("./FieldSelectMulti");

Object.keys(_FieldSelectMulti).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldSelectMulti[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldSelectMulti[key];
    }
  });
});
//# sourceMappingURL=index.js.map