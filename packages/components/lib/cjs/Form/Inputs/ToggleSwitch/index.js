"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ToggleSwitch = require("./ToggleSwitch");

Object.keys(_ToggleSwitch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ToggleSwitch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToggleSwitch[key];
    }
  });
});
//# sourceMappingURL=index.js.map