let _ = t => t,
  _t;

import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import styled from 'styled-components';
import { deriveVirtualizerPadding } from '../utils';

export const useVirtual = ({
  data,
  scrollContainer,
  defaultRowHeight: _defaultRowHeight = 30,
  defaultColumnWidth: _defaultColumnWidth = 100
}) => {
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollContainer.current,
    overscan: 10,
    estimateSize: () => _defaultRowHeight
  });
  const columnVirtualizer = useVirtualizer({
    count: data[0].length,
    getScrollElement: () => scrollContainer.current,
    overscan: 30,
    horizontal: true,
    estimateSize: () => _defaultColumnWidth
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  const virtualColumns = columnVirtualizer.getVirtualItems();
  const [paddingTop, paddingBottom] = deriveVirtualizerPadding(rowVirtualizer);
  const [paddingLeft, paddingRight] = deriveVirtualizerPadding(columnVirtualizer);
  const OffsetTop = ({
    as: _as = 'td'
  }) => paddingTop > 0 ? React.createElement("tr", null, React.createElement(TableCell, {
    as: _as,
    height: paddingTop
  })) : null;
  const OffsetBottom = ({
    as: _as2 = 'td'
  }) => paddingBottom > 0 ? React.createElement("tr", null, React.createElement(TableCell, {
    as: _as2,
    height: paddingBottom
  })) : null;
  const OffsetLeft = ({
    as: _as3 = 'td'
  }) => React.createElement(TableCell, {
    as: _as3
  }, React.createElement("div", {
    style: {
      width: `${paddingLeft}px`
    }
  }));
  const OffsetRight = ({
    as: _as4 = 'td'
  }) => React.createElement(TableCell, {
    as: _as4
  }, React.createElement("div", {
    style: {
      width: `${paddingRight}px`
    }
  }));
  return {
    virtualRows,
    virtualColumns,
    OffsetTop,
    OffsetBottom,
    OffsetLeft,
    OffsetRight
  };
};
const TableCell = styled.td.attrs(({
  height
}) => ({
  height
}))(_t || (_t = _``));
//# sourceMappingURL=useVirtual.js.map