"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OperatorLabel = require("./OperatorLabel");

Object.keys(_OperatorLabel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OperatorLabel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OperatorLabel[key];
    }
  });
});
//# sourceMappingURL=index.js.map