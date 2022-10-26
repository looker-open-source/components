"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComboboxText = getComboboxText;

function getComboboxText(value, options) {
  if (value === undefined) return '';

  if (typeof value === 'string') {
    if (options && options.length > 0) {
      var currentOption = options.find(function (option) {
        return option.value === value;
      });

      if (currentOption) {
        return getComboboxText(currentOption);
      }
    }

    return value;
  }

  return value.label || value.value;
}
//# sourceMappingURL=getComboboxText.js.map