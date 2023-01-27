

import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableDataCell } from '../../../../Table';
import { DateFormat } from '../DateFormat';
export const DateFormatTable = () => {
  return React.createElement(Table, {
    mb: "large"
  }, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableHeaderCell, null, "FORMAT"), React.createElement(TableHeaderCell, null, "OUTPUT"))), React.createElement(TableBody, null, React.createElement(TableRow, null, React.createElement(TableDataCell, null, "Short"), React.createElement(TableDataCell, null, React.createElement(DateFormat, {
    format: "short"
  }))), React.createElement(TableRow, null, React.createElement(TableDataCell, null, "Medium *"), React.createElement(TableDataCell, null, React.createElement(DateFormat, null))), React.createElement(TableRow, null, React.createElement(TableDataCell, null, "Long"), React.createElement(TableDataCell, null, React.createElement(DateFormat, {
    format: "long"
  }))), React.createElement(TableRow, null, React.createElement(TableDataCell, null, "Full"), React.createElement(TableDataCell, null, React.createElement(DateFormat, {
    format: "full"
  })))));
};
//# sourceMappingURL=DateFormatTable.js.map