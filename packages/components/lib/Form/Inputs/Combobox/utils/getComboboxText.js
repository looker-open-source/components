export function getComboboxText(value, options) {
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

  return value.label || value.value;
}
//# sourceMappingURL=getComboboxText.js.map