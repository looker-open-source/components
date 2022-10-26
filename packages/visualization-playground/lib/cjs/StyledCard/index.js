"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyledCard = require("./StyledCard");

Object.keys(_StyledCard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StyledCard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StyledCard[key];
    }
  });
});
//# sourceMappingURL=index.js.map