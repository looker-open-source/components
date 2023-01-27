

import { buildDimensionColumns, buildMeasureColumns } from '.';

export const buildFlatColumns = ({
  fields,
  config
}) => {
  return [...buildDimensionColumns(fields.dimensions), ...Object.values(buildMeasureColumns(fields.measures, config)).flat()];
};
//# sourceMappingURL=buildFlatColumns.js.map