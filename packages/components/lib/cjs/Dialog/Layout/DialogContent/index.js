"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogContent = require("./DialogContent");

Object.keys(_DialogContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DialogContent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DialogContent[key];
    }
  });
});
//# sourceMappingURL=index.js.map