"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;
var _Unsupported = require("./Unsupported");
Object.keys(_Unsupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Unsupported[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Unsupported[key];
    }
  });
});
var _default = _Unsupported.Unsupported;
exports["default"] = _default;
//# sourceMappingURL=index.js.map