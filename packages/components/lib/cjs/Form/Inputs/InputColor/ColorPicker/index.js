"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColorPicker = require("./ColorPicker");

Object.keys(_ColorPicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ColorPicker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ColorPicker[key];
    }
  });
});
//# sourceMappingURL=index.js.map