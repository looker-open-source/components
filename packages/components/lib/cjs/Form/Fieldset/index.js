"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fieldset = require("./Fieldset");

Object.keys(_Fieldset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Fieldset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Fieldset[key];
    }
  });
});
//# sourceMappingURL=index.js.map