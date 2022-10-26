import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { ViewColumn } from '@styled-icons/material/ViewColumn';
import { useTranslation } from '../../utils';
import { usePopover, PopoverContent } from '../../Popover';
import { IconButton } from '../../Button/IconButton';
import { CheckboxGroup } from '../../Form/Inputs/OptionsGroup';
import { ButtonTransparent } from '../../Button/ButtonTransparent';
import { Space, SpaceVertical } from '../../Layout';
export const ColumnSelector = ({
  columns,
  columnsVisible: defaultColumnsVisible,
  onColumnVisibilityChange
}) => {
  const {
    t
  } = useTranslation('ColumnSelector');
  const [isOpen, setOpen] = useState(false);
  const selectableColumns = columns.filter(c => c.hide !== undefined);
  const [columnsVisible, setColumnsVisible] = useState(defaultColumnsVisible);
  const options = selectableColumns.map(column => ({
    label: column.title,
    value: column.id
  }));

  const apply = () => {
    onColumnVisibilityChange(columnsVisible);
    setOpen(false);
  };

  const cancel = () => setOpen(false);

  const all = () => {
    const resetColumn = columns.map(column => column.id);
    setColumnsVisible(resetColumn);
  };

  const none = () => setColumnsVisible([]);

  const content = React.createElement(PopoverContent, {
    width: "12rem",
    overflow: "hidden"
  }, React.createElement(SpaceVertical, null, React.createElement(Space, {
    gap: "u1"
  }, React.createElement(ButtonTransparent, {
    size: "xsmall",
    onClick: all
  }, t('Select All')), React.createElement(ButtonTransparent, {
    size: "xsmall",
    onClick: none
  }, t('Select None'))), React.createElement(CheckboxGroup, {
    value: columnsVisible,
    onChange: setColumnsVisible,
    options: options
  }), React.createElement(Space, {
    reverse: true
  }, React.createElement(ButtonTransparent, {
    onClick: apply
  }, t('Apply')), React.createElement(ButtonTransparent, {
    onClick: cancel,
    color: "neutral"
  }, t('Cancel')))));
  const {
    popover,
    domProps
  } = usePopover({
    content,
    isOpen,
    setOpen
  });
  return React.createElement(React.Fragment, null, popover, React.createElement(IconButton, _extends({
    icon: React.createElement(ViewColumn, null),
    label: t('Select columns to display')
  }, domProps)));
};
//# sourceMappingURL=ColumnSelector.js.map