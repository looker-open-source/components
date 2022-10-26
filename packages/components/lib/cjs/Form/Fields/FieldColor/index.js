"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldColor = require("./FieldColor");

Object.keys(_FieldColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldColor[key];
    }
  });
});
//# sourceMappingURL=index.js.map