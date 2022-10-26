import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
export const useVirtual = ({
  data,
  scrollContainer,
  defaultRowHeight: _defaultRowHeight = 30
}) => {
  var _virtualRows$, _virtualRows;

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollContainer.current,
    overscan: 10,
    estimateSize: () => _defaultRowHeight
  });
  const {
    getTotalSize,
    getVirtualItems
  } = rowVirtualizer;
  const virtualRows = getVirtualItems();
  const paddingTop = virtualRows.length > 0 ? ((_virtualRows$ = virtualRows[0]) === null || _virtualRows$ === void 0 ? void 0 : _virtualRows$.start) || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? getTotalSize() - (((_virtualRows = virtualRows[virtualRows.length - 1]) === null || _virtualRows === void 0 ? void 0 : _virtualRows.end) || 0) : 0;

  const OffsetTop = () => paddingTop > 0 ? React.createElement("tr", null, React.createElement("td", {
    style: {
      height: `${paddingTop}px`
    }
  })) : null;

  const OffsetBottom = () => paddingBottom > 0 ? React.createElement("tr", null, React.createElement("td", {
    style: {
      height: `${paddingBottom}px`
    }
  })) : null;

  return {
    virtualRows,
    OffsetTop,
    OffsetBottom
  };
};
//# sourceMappingURL=useVirtual.js.map