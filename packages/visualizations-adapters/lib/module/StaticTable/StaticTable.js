let _ = t => t,
  _t;

import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableRow, TableBody, TableHeaderCell, TableDataCell } from '@looker/components';
export const StaticTable = ({
  data: _data = [],
  fields: _fields = {
    dimensions: [],
    measures: []
  },
  width: _width = 'auto'
}) => {
  if (!_data.length) {
    return null;
  }
  const measureLabels = [..._fields.measures].map(f => [f.name, f.view_label]);
  const dimensionLabels = [..._fields.dimensions].map(f => [f.name, f.label_short]);
  const fieldLabels = Object.fromEntries([...dimensionLabels, ...measureLabels]);
  const formattedData = _data.map(d => {
    return Object.fromEntries(
    Object.entries(d).map(([key, value]) => {
      return [key, value];
    }));
  });
  const resultKeys = Array.isArray(_data) ? Object.keys(_data[0]) : Object.keys(_data);
  return React.createElement(Table, {
    width: _width === 'auto' ? '100%' : `${_width}px`,
    "data-testid": "table-chart"
  }, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableHeaderCell, null), resultKeys.map(key => React.createElement(StyledTableHeaderCell, {
    key: key,
    width: "auto"
  }, fieldLabels[key])))), React.createElement(TableBody, null, Array.isArray(_data) && formattedData.map((obj, i) => {
    return React.createElement(TableRow, {
      key: i
    }, React.createElement(TableDataCell, {
      textAlign: "right",
      color: "text1",
      width: "1px",
      pr: "small"
    }, i + 1), resultKeys.map(key => {
      const val = obj[key];
      let valHelper = val;
      if (typeof val === 'function') {
        valHelper = val();
      } else if (Object(val) === val) {
        valHelper = JSON.stringify(val);
      }
      return React.createElement(TableDataCell, {
        key: key
      }, valHelper);
    }));
  })));
};
const StyledTableHeaderCell = styled(TableHeaderCell).withConfig({
  displayName: "StaticTable__StyledTableHeaderCell",
  componentId: "sc-15kcil2-0"
})(_t || (_t = _`
  &:first-child {
    max-width: 0;
    min-width: 0;
  }
`));
//# sourceMappingURL=StaticTable.js.map