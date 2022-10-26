"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ValidationMessage = require("./ValidationMessage");

Object.keys(_ValidationMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ValidationMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ValidationMessage[key];
    }
  });
});
//# sourceMappingURL=index.js.map