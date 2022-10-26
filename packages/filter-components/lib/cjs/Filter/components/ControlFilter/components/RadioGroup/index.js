"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RadioGroup = require("./RadioGroup");

Object.keys(_RadioGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RadioGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RadioGroup[key];
    }
  });
});
//# sourceMappingURL=index.js.map