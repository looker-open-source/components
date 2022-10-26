"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Prompt = require("./Prompt");

Object.keys(_Prompt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Prompt[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Prompt[key];
    }
  });
});
//# sourceMappingURL=index.js.map