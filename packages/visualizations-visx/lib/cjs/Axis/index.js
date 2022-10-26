"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tick = require("./Tick");

Object.keys(_Tick).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tick[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tick[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _XAxis = require("./XAxis");

Object.keys(_XAxis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _XAxis[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _XAxis[key];
    }
  });
});

var _XAxisDate = require("./XAxisDate");

Object.keys(_XAxisDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _XAxisDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _XAxisDate[key];
    }
  });
});

var _YAxis = require("./YAxis");

Object.keys(_YAxis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _YAxis[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _YAxis[key];
    }
  });
});
//# sourceMappingURL=index.js.map