const _excluded = ["id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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