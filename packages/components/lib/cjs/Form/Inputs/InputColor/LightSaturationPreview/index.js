"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LightSaturationPreview = require("./LightSaturationPreview");

Object.keys(_LightSaturationPreview).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LightSaturationPreview[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LightSaturationPreview[key];
    }
  });
});
//# sourceMappingURL=index.js.map