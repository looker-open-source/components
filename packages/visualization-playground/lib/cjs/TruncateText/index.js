"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TruncateText = require("./TruncateText");

Object.keys(_TruncateText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TruncateText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TruncateText[key];
    }
  });
});
//# sourceMappingURL=index.js.map