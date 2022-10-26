"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FieldCheckboxGroup = require("./FieldCheckboxGroup");

Object.keys(_FieldCheckboxGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FieldCheckboxGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldCheckboxGroup[key];
    }
  });
});
//# sourceMappingURL=index.js.map