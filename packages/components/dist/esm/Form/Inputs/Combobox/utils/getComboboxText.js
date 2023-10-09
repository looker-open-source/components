export function getComboboxText(value, options) {
  var _value$label;
  if (value === undefined) return '';
  if (typeof value === 'string') {
    if (options && options.length > 0) {
      const currentOption = options.find(option => option.value === value);
      if (currentOption) {
        return getComboboxText(currentOption);
      }
    }
    return value;
  }
  return (_value$label = value.label) !== null && _value$label !== void 0 ? _value$label : value.value;
}
//# sourceMappingURL=getComboboxText.js.map