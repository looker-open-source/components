"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CopyToClipboard = require("./CopyToClipboard");

Object.keys(_CopyToClipboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CopyToClipboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CopyToClipboard[key];
    }
  });
});
//# sourceMappingURL=index.js.map