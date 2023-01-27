
const validateValue = value => !value ? '0' : value;
export const convertToNumber = value => parseInt(validateValue(value), 10);
//# sourceMappingURL=convert_to_number.js.map