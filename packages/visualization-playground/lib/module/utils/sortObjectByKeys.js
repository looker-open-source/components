
export const sortObjectByKeys = o => {
  return Object.keys(o).sort().reduce((obj, key) => {
    obj[key] = o[key];
    return obj;
  }, {});
};
//# sourceMappingURL=sortObjectByKeys.js.map