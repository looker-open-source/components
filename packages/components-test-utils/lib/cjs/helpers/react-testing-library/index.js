"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  closeCombobox: true,
  getAllComboboxOptionText: true,
  getComboboxOptions: true,
  getComboboxOptionText: true,
  openCombobox: true
};
Object.defineProperty(exports, "closeCombobox", {
  enumerable: true,
  get: function get() {
    return _comboboxHelpers.closeCombobox;
  }
});
Object.defineProperty(exports, "getAllComboboxOptionText", {
  enumerable: true,
  get: function get() {
    return _comboboxHelpers.getAllComboboxOptionText;
  }
});
Object.defineProperty(exports, "getComboboxOptionText", {
  enumerable: true,
  get: function get() {
    return _comboboxHelpers.getComboboxOptionText;
  }
});
Object.defineProperty(exports, "getComboboxOptions", {
  enumerable: true,
  get: function get() {
    return _comboboxHelpers.getComboboxOptions;
  }
});
Object.defineProperty(exports, "openCombobox", {
  enumerable: true,
  get: function get() {
    return _comboboxHelpers.openCombobox;
  }
});

var _comboboxHelpers = require("./comboboxHelpers");

var _firePasteEvent = require("./firePasteEvent");

Object.keys(_firePasteEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _firePasteEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _firePasteEvent[key];
    }
  });
});
//# sourceMappingURL=index.js.map