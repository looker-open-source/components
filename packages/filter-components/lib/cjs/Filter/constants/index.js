"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = require("./date");

Object.keys(_date).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _date[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _date[key];
    }
  });
});

var _location = require("./location");

Object.keys(_location).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _location[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _location[key];
    }
  });
});
//# sourceMappingURL=index.js.map