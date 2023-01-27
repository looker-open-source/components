

import { buildDimensionColumns, buildMeasureColumns, nestPivotedFields } from '.';

export const buildGroupedColumns = props => {
  const {
    fields,
    pivots,
    config
  } = props;

  const reversedPivots = [...(fields.pivots || [])].reverse();
  const dimensionColumns = buildDimensionColumns(fields.dimensions);
  const nestedDimensions = nestPivotedFields({
    pivotList: reversedPivots,
    pivotIndex: 0,
    nestedPivots: dimensionColumns
  });
  const measureColumns = buildMeasureColumns(fields.measures, config);
  const nestedMeasures = Object.entries(measureColumns).reduce((groups, [pivotKey, measures]) => {
    const pivot = pivots.find(p => p.key === pivotKey);
    const columnGroups = nestPivotedFields({
      pivotList: reversedPivots,
      pivotIndex: 0,
      nestedPivots: measures,
      pivotValues: pivot
    });
    return [...groups, columnGroups];
  }, []);
  return [nestedDimensions, ...nestedMeasures];
};
//# sourceMappingURL=buildGroupedColumns.js.map