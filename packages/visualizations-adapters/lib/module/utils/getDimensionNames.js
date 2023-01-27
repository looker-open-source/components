

import { DEFAULT_EMPTY_FIELDS } from '.';

export const getDimensionNames = (fields = DEFAULT_EMPTY_FIELDS) => {
  const {
    dimensions = []
  } = fields;
  return dimensions.map(field => field.name);
};
//# sourceMappingURL=getDimensionNames.js.map