import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["id"];
import React, { useContext } from 'react';
import { useID } from '../../utils/useID';
import { DataTableRow } from '../Item/DataTableRow';
import { DataTableContext } from '../DataTableContext';
import { DataTableHeaderCell } from './DataTableHeaderCell';
export const DataTableHeader = ({
  id
}) => {
  const {
    allSelected,
    columns,
    select
  } = useContext(DataTableContext);
  const hasCheckbox = !!select;

  const onChange = () => select ? select.onSelectAll() : undefined;

  const headerColumns = columns && columns.map(_ref => {
    let {
      id
    } = _ref,
        column = _objectWithoutProperties(_ref, _excluded);

    return React.createElement(DataTableHeaderCell, _extends({}, column, {
      columnId: id,
      key: id
    }));
  });
  return React.createElement(DataTableRow, {
    checked: allSelected,
    id: useID(id),
    isHeaderRow: true,
    hasCheckbox: hasCheckbox,
    onChange: onChange
  }, headerColumns);
};
//# sourceMappingURL=DataTableHeader.js.map