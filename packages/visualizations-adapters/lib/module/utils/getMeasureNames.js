

import { DEFAULT_EMPTY_FIELDS } from '.';

export const getMeasureNames = (fields = DEFAULT_EMPTY_FIELDS) => {
  const {
    measures = []
  } = fields;
  return measures.map(field => field.name);
};
//# sourceMappingURL=getMeasureNames.js.map