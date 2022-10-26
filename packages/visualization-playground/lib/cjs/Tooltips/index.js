"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltips = require("./Tooltips");

Object.keys(_Tooltips).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tooltips[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tooltips[key];
    }
  });
});
//# sourceMappingURL=index.js.map