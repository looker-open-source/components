

export const isNumeric = str => typeof str === 'number' || typeof str === 'string' && str !== '' && !isNaN(Number(str.replace(/\.|,/g, '')));
//# sourceMappingURL=isNumeric.js.map