let _ = t => t,
  _t;
const _excluded = ["className", "children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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