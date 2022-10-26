let _ = t => t,
    _t;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import { Button, ButtonTransparent } from '../../Button';
import { Space } from '../../Layout';
import { Menu } from '../../Menu';
import { Span } from '../../Text';
import { useTranslation } from '../../utils';
import { DataTableContext } from '../DataTableContext';

const BulkActionsLayout = ({
  actions,
  className,
  onTotalClearAll,
  onTotalSelectAll,
  pageCount,
  totalCount
}) => {
  const {
    t
  } = useTranslation('BulkActions');
  const {
    select
  } = useContext(DataTableContext);
  const selectedItemCount = select ? select.selectedItems.length : 0;
  let message;

  if (selectedItemCount < pageCount) {
    message = t('SelectedCountOfTotalDisplayed', {
      pageCount: Number(pageCount),
      selectedItemCount: Number(selectedItemCount)
    });
  } else if (selectedItemCount === pageCount) {
    message = t('AllPageCountDisplayedSelected', {
      pageCount: Number(pageCount)
    });
  } else if (totalCount && selectedItemCount === totalCount) {
    message = t('AllTotalCountSelected', {
      totalCount: Number(totalCount)
    });
  }

  const selectedItemsText = React.createElement(Span, {
    color: "text2",
    fontSize: "xsmall"
  }, message);
  const selectTotalResultsButton = React.createElement(ButtonTransparent, {
    onClick: selectedItemCount === totalCount ? onTotalClearAll : onTotalSelectAll
  }, React.createElement(Span, {
    fontWeight: "semiBold",
    fontSize: "xsmall"
  }, selectedItemCount === totalCount ? t('Clear Selection') : t('SelectAllCountResults', {
    totalCount: Number(totalCount)
  })));
  return React.createElement("div", {
    className: className
  }, React.createElement(Menu, {
    content: actions
  }, React.createElement(Button, {
    iconAfter: React.createElement(ArrowDropDown, null),
    size: "xsmall"
  }, t('Bulk Actions'))), React.createElement(Space, {
    gap: "u3",
    justify: "center"
  }, selectedItemsText, selectTotalResultsButton));
};

export const BulkActions = styled(BulkActionsLayout).withConfig({
  displayName: "BulkActions",
  componentId: "sc-z1cplu-0"
})(_t || (_t = _`
  align-items: center;
  background-color: ${0};
  border-bottom: solid 1px ${0};
  display: flex;
  height: 3.25rem;
  justify-content: center;
  position: relative;

  ${0} {
    left: ${0};
    position: absolute;
  }
`), ({
  theme
}) => theme.colors.ui1, ({
  theme
}) => theme.colors.ui2, Button, ({
  theme
}) => theme.space.u3);
//# sourceMappingURL=BulkActions.js.map