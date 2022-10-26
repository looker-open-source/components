let _ = t => t,
    _t;

import pick from 'lodash/pick';
import React, { Children, cloneElement, forwardRef, isValidElement, useContext } from 'react';
import styled from 'styled-components';
import { DataTableContext } from '../DataTableContext';
import { DataTableCheckbox, checkListProps } from './DataTableCheckbox';
const DataTableRowLayout = forwardRef((props, ref) => {
  const {
    className,
    hasCheckbox,
    children,
    id,
    isHeaderRow,
    onClick,
    onKeyDown,
    secondary
  } = props;
  const ColumnType = isHeaderRow ? 'th' : 'td';
  const {
    columns,
    columnsDisplayState
  } = useContext(DataTableContext);

  const getColumnSize = index => columns && columns[index].size;

  const sizedChildren = Children.map(children, (child, index) => {
    if (columnsDisplayState && !columnsDisplayState[index]) {
      return null;
    }

    const size = getColumnSize(index);
    const cellProps = index === 0 ? {
      id: `rowheader-${id}`,
      role: 'rowheader',
      size
    } : {
      size
    };
    return isValidElement(child) && cloneElement(child, cellProps);
  });

  const handleOnClick = event => {
    return event.target instanceof HTMLAnchorElement ? undefined : onClick && onClick(event);
  };

  const suppressClickPropagation = event => {
    event.stopPropagation();
  };

  return React.createElement("tr", {
    ref: ref,
    className: className,
    onKeyDown: onKeyDown,
    onClick: handleOnClick
  }, hasCheckbox ? React.createElement(ColumnType, {
    onClick: suppressClickPropagation
  }, React.createElement(DataTableCheckbox, pick(props, checkListProps))) : React.createElement(ColumnType, {
    "aria-hidden": "true"
  }), sizedChildren, React.createElement(ColumnType, {
    onClick: suppressClickPropagation
  }, secondary));
});
DataTableRowLayout.displayName = 'DataTableRowLayout';

const getRowHoverColor = (theme, hasOnClick, isHeader, isSelected) => {
  if (!isHeader && hasOnClick) {
    return isSelected ? theme.colors.keyAccent : theme.colors.ui1;
  }

  return undefined;
};

export const DataTableRow = styled(DataTableRowLayout).withConfig({
  displayName: "DataTableRow",
  componentId: "sc-gwwepv-0"
})(_t || (_t = _`
  td,
  th {
    background: ${0};
    border-bottom: solid 1px ${0};
    &:first-of-type > div {
      border-left: 1px solid transparent;
      border-right: 1px solid transparent; /* Keeps checkbox centered */
      height: 100%;
    }
  }

  &:hover {
    cursor: ${0};
    outline: none;

    td,
    th {
      background: ${0};
    }
  }

  &:focus {
    outline: none;

    td:first-of-type > div {
      border-left-color: ${0};
    }
  }
`), ({
  checked,
  isHeaderRow,
  theme: {
    colors
  }
}) => checked && !isHeaderRow ? colors.keySubtle : colors.background, ({
  theme
}) => theme.colors.ui2, ({
  onClick
}) => onClick && 'pointer', ({
  checked,
  isHeaderRow,
  onClick,
  theme
}) => getRowHoverColor(theme, Boolean(onClick), Boolean(isHeaderRow), Boolean(checked)), ({
  theme
}) => theme.colors.key);
//# sourceMappingURL=DataTableRow.js.map