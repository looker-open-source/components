

import has from 'lodash/has';
export const tabularResponse = (data = []) => data.map(d => {
  const dataEntries = Object.entries(d);
  return Object.fromEntries(dataEntries.map(([key, val]) => [key, has(val, 'value') ? val.value : val]));
});
//# sourceMappingURL=tabularResponse.js.map