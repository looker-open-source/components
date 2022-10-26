"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DropdownMenu = require("./DropdownMenu");

Object.keys(_DropdownMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DropdownMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DropdownMenu[key];
    }
  });
});
//# sourceMappingURL=index.js.map