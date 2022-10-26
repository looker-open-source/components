"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChipButton = require("./ChipButton");

Object.keys(_ChipButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ChipButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ChipButton[key];
    }
  });
});
//# sourceMappingURL=index.js.map