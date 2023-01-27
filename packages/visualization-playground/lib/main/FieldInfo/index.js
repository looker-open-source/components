"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _FieldInfo = require("./FieldInfo");
Object.keys(_FieldInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldInfo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldInfo[key];
    }
  });
});
//# sourceMappingURL=index.js.map