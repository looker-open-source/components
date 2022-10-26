"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextArea = require("./TextArea");

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextArea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea[key];
    }
  });
});
//# sourceMappingURL=index.js.map