"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MenuItem = require("./MenuItem");
Object.keys(_MenuItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MenuItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuItem[key];
    }
  });
});
//# sourceMappingURL=index.js.map