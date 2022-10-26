"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldChips = require("./FieldChips");

Object.keys(_FieldChips).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldChips[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldChips[key];
    }
  });
});
//# sourceMappingURL=index.js.map