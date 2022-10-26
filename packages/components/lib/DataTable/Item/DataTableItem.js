let _ = t => t,
    _t;

import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { MoreVert } from '@styled-icons/material/MoreVert';
import { IconButton } from '../../Button';
import { Menu } from '../../Menu';
import { useTranslation } from '../../utils';
import { DataTableContext } from '../DataTableContext';
import { DataTableRow } from './DataTableRow';
import { ItemTarget, ItemTargetGroup } from './ItemTarget';

const DataTableItemLayout = props => {
  const {
    t
  } = useTranslation('DataTableItem');
  const actionsTooltipText = t('Options');
  const {
    actions,
    actionsTooltip = actionsTooltipText,
    children,
    className,
    disabled,
    id,
    onClick,
    actionPrimary
  } = props;
  const ref = useRef(null);
  const {
    select
  } = useContext(DataTableContext);
  const handleClick = disabled ? undefined : onClick || undefined;
  const ItemActions = (actionPrimary || actions) && React.createElement(ItemTargetGroup, null, actionPrimary && React.createElement(ItemTarget, null, actionPrimary), actions && React.createElement(ItemTarget, null, React.createElement(Menu, {
    content: actions
  }, React.createElement(IconButton, {
    icon: React.createElement(MoreVert, null),
    label: actionsTooltip,
    size: "small",
    tabIndex: -1
  }))));
  const onChange = select ? () => select.onSelect(id) : undefined;
  const checked = select && select.selectedItems.includes(id);
  return React.createElement(DataTableRow, {
    checked: checked,
    className: className,
    disabled: disabled,
    hasCheckbox: !!select,
    id: id,
    onChange: onChange,
    onClick: handleClick,
    ref: ref,
    secondary: ItemActions,
    tabIndex: 0
  }, children);
};

export const DataTableItem = styled(DataTableItemLayout).withConfig({
  displayName: "DataTableItem",
  componentId: "sc-5zp8q0-0"
})(_t || (_t = _``));
//# sourceMappingURL=DataTableItem.js.map