"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputColor = require("./InputColor");

Object.keys(_InputColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputColor[key];
    }
  });
});

var _HueSlider = require("./HueSlider");

Object.keys(_HueSlider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HueSlider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HueSlider[key];
    }
  });
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

var _Swatch = require("./Swatch");

Object.keys(_Swatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Swatch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Swatch[key];
    }
  });
});
//# sourceMappingURL=index.js.map