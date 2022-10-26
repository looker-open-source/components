"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckboxGroup = require("./CheckboxGroup");

Object.keys(_CheckboxGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CheckboxGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CheckboxGroup[key];
    }
  });
});
//# sourceMappingURL=index.js.map