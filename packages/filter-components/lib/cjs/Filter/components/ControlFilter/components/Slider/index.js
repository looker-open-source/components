"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slider = require("./Slider");

Object.keys(_Slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Slider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slider[key];
    }
  });
});

var _RangeSlider = require("./RangeSlider");

Object.keys(_RangeSlider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RangeSlider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RangeSlider[key];
    }
  });
});
//# sourceMappingURL=index.js.map