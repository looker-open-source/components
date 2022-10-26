export function formatOptionAsString(option) {
  if (option.label && option.label !== option.value) {
    return JSON.stringify(option);
  }

  return option.value;
}
//# sourceMappingURL=formatOptionAsString.js.map