

const isUnsafeIntegerString = text => text.length > 15 && text.indexOf('.') === -1;

export const getNumberFromString = text => {
  if (isUnsafeIntegerString(text)) {
    return BigInt(text);
  }
  return Number(text);
};
//# sourceMappingURL=get_number_from_string.js.map