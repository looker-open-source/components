"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldCheckbox = require("./FieldCheckbox");

Object.keys(_FieldCheckbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldCheckbox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldCheckbox[key];
    }
  });
});
//# sourceMappingURL=index.js.map