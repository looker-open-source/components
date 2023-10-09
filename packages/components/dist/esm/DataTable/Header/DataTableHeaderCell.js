let _ = t => t,
  _t;
const _excluded = ["role"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext, forwardRef } from 'react';
import styled from 'styled-components';
import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import { DataTableContext } from '../DataTableContext';
import { Icon } from '../../Icon';
import { Space } from '../../Layout/Space';
import { Tooltip } from '../../Tooltip';
import { Truncate } from '../../Truncate';
import { useClickable } from '../../utils';
import { VisuallyHidden } from '../../VisuallyHidden';
import { columnSize, sizeInfersTruncate } from '../Column/columnSize';
import { FocusableCell } from '../Column/FocusableCell';
const DataTableHeaderCellLayout = forwardRef(({
  canSort,
  className,
  title,
  titleIcon,
  columnId,
  size,
  sortDirection,
  type
}, ref) => {
  const {
    onSort
  } = useContext(DataTableContext);
  const onClick = () => {
    if (onSort && canSort) {
      onSort(columnId, sortDirection === 'asc' ? 'desc' : 'asc');
    }
  };
  const _useClickable = useClickable({
      onClick
    }),
    {
      role: _role
    } = _useClickable,
    clickableProps = _objectWithoutProperties(_useClickable, _excluded);
  let label;
  if (titleIcon) {
    label = React.createElement(React.Fragment, null, React.createElement(VisuallyHidden, null, title), React.createElement(Tooltip, {
      content: title
    }, React.createElement(Icon, {
      color: "ui3",
      icon: titleIcon,
      size: "small"
    })));
  } else if (size && sizeInfersTruncate(size)) {
    label = React.createElement(Truncate, {
      width: "auto"
    }, title);
  } else {
    label = title;
  }
  let ariaSort = 'none';
  if (sortDirection === 'asc') {
    ariaSort = 'ascending';
  } else if (sortDirection === 'desc') {
    ariaSort = 'descending';
  }
  return React.createElement(FocusableCell, _extends({
    as: "th",
    "aria-sort": ariaSort,
    className: className,
    ref: ref,
    style: {
      cursor: canSort ? 'pointer' : undefined
    }
  }, clickableProps), React.createElement(Space, {
    gap: "u1",
    reverse: type === 'number'
  }, label, sortDirection && React.createElement(Icon, {
    icon: sortDirection === 'asc' ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null),
    size: "small"
  })));
});
DataTableHeaderCellLayout.displayName = 'DataTableHeaderCellLayout';
export const DataTableHeaderCell = styled(DataTableHeaderCellLayout).withConfig({
  displayName: "DataTableHeaderCell",
  componentId: "sc-1e4utgn-0"
})(_t || (_t = _`
  ${0}
  border-bottom: solid 1px ${0};
  color: ${0};
  font-weight: ${0};
  text-align: left;
`), columnSize, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.fontWeights.semiBold);
//# sourceMappingURL=DataTableHeaderCell.js.map