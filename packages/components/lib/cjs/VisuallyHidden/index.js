"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VisuallyHidden = require("./VisuallyHidden");

Object.keys(_VisuallyHidden).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _VisuallyHidden[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VisuallyHidden[key];
    }
  });
});
//# sourceMappingURL=index.js.map