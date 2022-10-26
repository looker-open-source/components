"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _XYTooltip = require("./XYTooltip");

Object.keys(_XYTooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _XYTooltip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _XYTooltip[key];
    }
  });
});
//# sourceMappingURL=index.js.map