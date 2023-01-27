
import React from 'react';
import { TableHead } from '../../TableHead';
import { TableRow } from '../../TableRow';
import { TableHeaderCell } from '../../TableHeaderCell';
export default function Basic() {
  return React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableHeaderCell, null, "Column 1"), React.createElement(TableHeaderCell, null, "Column 2"), React.createElement(TableHeaderCell, null, "Column 3")));
}
//# sourceMappingURL=Basic.js.map