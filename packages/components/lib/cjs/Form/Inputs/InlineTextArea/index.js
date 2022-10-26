"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InlineTextArea = require("./InlineTextArea");

Object.keys(_InlineTextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InlineTextArea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InlineTextArea[key];
    }
  });
});
//# sourceMappingURL=index.js.map