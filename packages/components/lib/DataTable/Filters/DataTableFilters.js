import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["className", "children"];
import styled from 'styled-components';
import React from 'react';
import { densityTarget } from '@looker/design-tokens';
import { DividerVertical } from '../../Divider';
import { InputFilters } from '../../Form/Inputs/InputFilters';
import { ItemTarget } from '../Item/ItemTarget';
import { ColumnSelector } from './ColumnSelector';

const hasSelectableColumns = columns => Boolean(columns.find(c => c.hide !== undefined));

const DataTableFiltersLayout = _ref => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const columnsSelector = React.createElement(React.Fragment, null, React.createElement(DividerVertical, {
    mx: "none",
    stretch: true
  }), React.createElement(ItemTarget, null, React.createElement(ColumnSelector, props)));
  return React.createElement("div", {
    className: className
  }, children, hasSelectableColumns(props.columns) && columnsSelector);
};

export const DataTableFilters = styled(DataTableFiltersLayout).withConfig({
  displayName: "DataTableFilters",
  componentId: "sc-1p8hllh-0"
})(_t || (_t = _`
  align-items: flex-start;
  border-bottom: solid 1px ${0};
  border-top: solid 1px ${0};
  display: flex;

  ${0} {
    border: none;
  }

  ${0} {
    /* Reduce to compensate for outer borders */
    min-height: calc(${0} - 2px);
  }
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.ui2, InputFilters, ItemTarget, densityTarget);
//# sourceMappingURL=DataTableFilters.js.map