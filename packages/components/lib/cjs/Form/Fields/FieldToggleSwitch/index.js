"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldToggleSwitch = require("./FieldToggleSwitch");

Object.keys(_FieldToggleSwitch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldToggleSwitch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldToggleSwitch[key];
    }
  });
});
//# sourceMappingURL=index.js.map