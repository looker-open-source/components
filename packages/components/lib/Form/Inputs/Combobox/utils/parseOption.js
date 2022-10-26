export function parseOption(text) {
  try {
    const parsed = JSON.parse(text);

    if (parsed.value) {
      return parsed;
    } else {
      return {
        value: text
      };
    }
  } catch (e) {
    return {
      value: text
    };
  }
}
//# sourceMappingURL=parseOption.js.map