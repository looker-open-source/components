import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10;

import { densityTarget } from '@looker/design-tokens';
import React from 'react';
import styled, { css } from 'styled-components';
import { Spinner } from '../Spinner';
import { Heading } from '../Text';
import { useArrowKeyNav, useCallbackRef, useIsTruncated, useTranslation } from '../utils';
import { getNumericColumnIndices, numericColumnCSS } from './utils/dataTableFormatting';
import { DataTableHeader } from './Header/DataTableHeader';
import { edgeShadow } from './utils/edgeShadow';
import { getNextFocus } from './getNextFocus';
export const TableLayout = props => {
  const {
    t
  } = useTranslation('DataTable');
  const noResultsDisplayText = t('No Results');
  const {
    caption,
    children,
    className,
    columnsVisible,
    headerRowId,
    noResultsDisplay = noResultsDisplayText,
    state
  } = props;
  const [element, ref] = useCallbackRef();
  const overflow = useIsTruncated(element, columnsVisible.length);
  const noResultsContent = typeof noResultsDisplay === 'string' ? React.createElement(Heading, {
    color: "text1"
  }, noResultsDisplay) : noResultsDisplay;
  const interimState = state && React.createElement(InterimState, null, state === 'loading' ? React.createElement(Spinner, null) : noResultsContent);
  const navProps = useArrowKeyNav({
    axis: 'both',
    getNextFocus
  });
  return React.createElement(React.Fragment, null, React.createElement(TableScroll, {
    ref: ref
  }, React.createElement("table", _extends({
    "aria-label": caption,
    className: overflow ? `${className} overflow` : className
  }, navProps), React.createElement("thead", null, React.createElement(DataTableHeader, {
    id: headerRowId
  })), !interimState && React.createElement("tbody", null, children))), interimState);
};
const selectColumn = css(_t || (_t = _`
  ${0}
`), ({
  select
}) => select ? css(_t2 || (_t2 = _`
          &:first-child {
            max-width: ${0};
            min-width: ${0};
            width: ${0};
          }
          &:nth-child(2) {
            padding-left: ${0};
          }
        `), densityTarget, densityTarget, densityTarget, ({
  theme
}) => theme.space.u2) : css(_t3 || (_t3 = _`
          /* stylelint-disable-next-line  */
          &:first-child {
            max-width: 0;
            min-width: 0;
          }
        `)));
const actionsColumn = css(_t4 || (_t4 = _`
  &:last-child {
    padding: 0;
    width: 100%;
  }
`));
const stickyColumns = css(_t5 || (_t5 = _`
  ${0}

  ${0}

  &:last-child {
    ${0}
    position: sticky;
    right: 0;
  }
`), ({
  select,
  firstColumnStuck
}) => (select || firstColumnStuck) && css(_t6 || (_t6 = _`
      &:first-child {
        left: 0;
        position: sticky;
        ${0}
      }
    `), firstColumnStuck === false && edgeShadow()), ({
  select,
  firstColumnStuck
}) => firstColumnStuck && css(_t7 || (_t7 = _`
      &:nth-child(2) {
        left: ${0};
        position: sticky;
        ${0}
      }
    `), select ? densityTarget : 0, edgeShadow()), edgeShadow('right'));
export const Table = styled(TableLayout).withConfig({
  displayName: "Table",
  componentId: "sc-tf9jqn-0"
})(_t8 || (_t8 = _`
  border-collapse: initial;
  border-spacing: 0;
  font-family: ${0};
  font-size: ${0};
  line-height: 1;
  width: 100%;

  td,
  th {
    height: ${0}; /* acts like min-height */
    padding: ${0};

    :first-child,
    :last-child {
      padding: 0;
    }

    ${0}
    ${0}
  }

  tbody td {
    color: ${0};
  }

  &.overflow {
    tr {
      td,
      th {
        ${0}
        height: initial;
      }
    }
  }

  ${0}
`), ({
  theme
}) => theme.fonts.body, ({
  theme
}) => theme.fontSizes.small, densityTarget, ({
  theme: {
    space
  }
}) => `${space.u2}  ${space.u4}`, selectColumn, actionsColumn, ({
  theme
}) => theme.colors.text4, stickyColumns, ({
  columns,
  columnsVisible
}) => numericColumnCSS(getNumericColumnIndices(columns, columnsVisible)));
const InterimState = styled.div.withConfig({
  displayName: "Table__InterimState",
  componentId: "sc-tf9jqn-1"
})(_t9 || (_t9 = _`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${0};
`), ({
  theme
}) => theme.space.u8);
export const TableScroll = styled.div.withConfig({
  displayName: "Table__TableScroll",
  componentId: "sc-tf9jqn-2"
})(_t10 || (_t10 = _`
  overflow-x: auto;
`));
//# sourceMappingURL=Table.js.map