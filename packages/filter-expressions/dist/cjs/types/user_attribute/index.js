"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _user_attribute_with_value = require("./user_attribute_with_value");
Object.keys(_user_attribute_with_value).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user_attribute_with_value[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user_attribute_with_value[key];
    }
  });
});
var _user_attribute_type = require("./user_attribute_type");
Object.keys(_user_attribute_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user_attribute_type[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user_attribute_type[key];
    }
  });
});
//# sourceMappingURL=index.js.map