"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserAttributes = require("./UserAttributes");

Object.keys(_UserAttributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserAttributes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UserAttributes[key];
    }
  });
});
//# sourceMappingURL=index.js.map