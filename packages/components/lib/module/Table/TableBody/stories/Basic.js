
import React from 'react';
import { TableRow } from '../../TableRow';
import { TableBody } from '../../TableBody';
import { TableDataCell } from '../../TableDataCell';
export default function Basic() {
  return React.createElement(TableBody, null, React.createElement(TableRow, null, React.createElement(TableDataCell, null, "Cell 1"), React.createElement(TableDataCell, null, "Cell 2")));
}
//# sourceMappingURL=Basic.js.map