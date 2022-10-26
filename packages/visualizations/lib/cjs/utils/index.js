"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = require("./i18n");

Object.keys(_i18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _i18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _i18n[key];
    }
  });
});

var _useTranslation = require("./useTranslation");

Object.keys(_useTranslation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTranslation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useTranslation[key];
    }
  });
});
//# sourceMappingURL=index.js.map