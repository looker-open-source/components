"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortAssets = void 0;
var _material = require("@styled-icons/material");

var getSortAssets = function getSortAssets(t, columnSortState) {
  if (typeof columnSortState === 'undefined') {
    return {
      SortIcon: _material.SwapVert,
      sortText: t('Shift + Click to sort additional columns', {
        ns: 'Table'
      }),
      ariaSort: 'none'
    };
  } else if (columnSortState.desc) {
    return {
      SortIcon: _material.KeyboardArrowDown,
      sortText: t('Sort ascending', {
        ns: 'Table'
      }),
      ariaSort: 'descending'
    };
  } else {
    return {
      SortIcon: _material.KeyboardArrowUp,
      sortText: t('Sort descending', {
        ns: 'Table'
      }),
      ariaSort: 'ascending'
    };
  }
};
exports.getSortAssets = getSortAssets;
//# sourceMappingURL=getSortAssets.js.map