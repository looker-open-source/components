
import { KeyboardArrowDown, KeyboardArrowUp, SwapVert } from '@styled-icons/material';

export const getSortAssets = (t, columnSortState) => {
  if (typeof columnSortState === 'undefined') {
    return {
      SortIcon: SwapVert,
      sortText: t('Shift + Click to sort additional columns', {
        ns: 'Table'
      }),
      ariaSort: 'none'
    };
  } else if (columnSortState.desc) {
    return {
      SortIcon: KeyboardArrowDown,
      sortText: t('Sort ascending', {
        ns: 'Table'
      }),
      ariaSort: 'descending'
    };
  } else {
    return {
      SortIcon: KeyboardArrowUp,
      sortText: t('Sort descending', {
        ns: 'Table'
      }),
      ariaSort: 'ascending'
    };
  }
};
//# sourceMappingURL=getSortAssets.js.map