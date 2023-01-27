

import React from 'react';
import { Table } from '../Table';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { TableHeaderCell } from '../TableHeaderCell';
import { TableBody } from '../TableBody';
import { TableDataCell } from '../TableDataCell';
export default function Basic() {
  return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableHeaderCell, null, "Column 1"), React.createElement(TableHeaderCell, null, "Column 2"), React.createElement(TableHeaderCell, null, "Column 3"))), React.createElement(TableBody, null, React.createElement(TableRow, null, React.createElement(TableDataCell, null, "1"), React.createElement(TableDataCell, null, "2"), React.createElement(TableDataCell, null, "3")), React.createElement(TableRow, null, React.createElement(TableDataCell, null, "1"), React.createElement(TableDataCell, null, "2"), React.createElement(TableDataCell, null, "3")), React.createElement(TableRow, null, React.createElement(TableDataCell, null, "1"), React.createElement(TableDataCell, null, "2"), React.createElement(TableDataCell, null, "3"))));
}
//# sourceMappingURL=Basic.js.map