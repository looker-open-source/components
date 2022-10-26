"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldText = require("./FieldText");

Object.keys(_FieldText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldText[key];
    }
  });
});
//# sourceMappingURL=index.js.map