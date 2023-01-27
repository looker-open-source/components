

import { createColumnHelper } from '@tanstack/react-table';
export const nestPivotedFields = ({
  pivotList: _pivotList = [],
  pivotIndex,
  nestedPivots,
  pivotValues
}) => {
  const columnHelper = createColumnHelper();
  const pivot = _pivotList[pivotIndex];
  if (pivot) {
    var _pivotValues$labels$p;
    const {
      id,
      header
    } = pivotValues ? {
      id: `${pivot.name} - ${pivotValues === null || pivotValues === void 0 ? void 0 : pivotValues.data[pivot.name]}`,
      header: pivotValues === null || pivotValues === void 0 ? void 0 : (_pivotValues$labels$p = pivotValues.labels[pivot.name]) === null || _pivotValues$labels$p === void 0 ? void 0 : _pivotValues$labels$p.replace(/(<([^>]+)>)/gi, '')
    } : {
      id: pivot.name,
      header: pivot.label
    };
    return nestPivotedFields({
      pivotList: _pivotList,
      pivotIndex: pivotIndex + 1,
      nestedPivots: columnHelper.group({
        id,
        header,
        columns: [...(Array.isArray(nestedPivots) ? nestedPivots : [nestedPivots])]
      }),
      pivotValues
    });
  }

  if (Array.isArray(nestedPivots)) {
    return columnHelper.group({
      id: `pivot-field-${pivotIndex}`,
      columns: nestedPivots
    });
  }
  return nestedPivots;
};
//# sourceMappingURL=nestPivotedFields.js.map