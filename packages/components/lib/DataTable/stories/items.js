import React from 'react';
import { Delete } from '@styled-icons/material';
import { data as mockData } from '../../fixtures/DataTable/data';
import { Link } from '../../Link';
import { Status } from '../../Status';
import { Tooltip } from '../../Tooltip';
import { DataTableCell } from '../Column';
import { DataTableItem, DataTableAction } from '../Item';
import { IconButton } from '../../Button/IconButton';
export const actions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
  onClick: () => alert(`Ordered!!`)
}, "Order"), React.createElement(DataTableAction, {
  onClick: () => alert('Mmmm...')
}, "Make Grilled Cheese"), React.createElement(DataTableAction, {
  onClick: () => alert('Delete')
}, "Delete"));
const actionPrimary = React.createElement(IconButton, {
  icon: React.createElement(Delete, null),
  label: "Trash It",
  onClick: () => alert('Trash it')
});
export const itemBuilder = (data, actions, actionPrimary) => {
  return data.map(({
    id,
    name,
    color,
    inventory,
    origin,
    type,
    fat,
    calories,
    protein,
    description,
    calcium,
    status,
    disabled
  }) => {
    let intent = 'positive';

    if (status === 'Out of Stock') {
      intent = 'critical';
    } else if (status === 'Low Stock') {
      intent = 'warn';
    }

    return React.createElement(DataTableItem, {
      actionPrimary: actionPrimary,
      actions: actions,
      disabled: disabled,
      id: id,
      key: id
    }, React.createElement(DataTableCell, {
      description: type
    }, React.createElement(Link, {
      href: "https://components.looker.com/",
      target: "_blank"
    }, name)), React.createElement(DataTableCell, null, React.createElement(Tooltip, {
      content: status
    }, React.createElement(Status, {
      intent: intent,
      title: status,
      size: "xsmall"
    }))), React.createElement(DataTableCell, null, inventory), React.createElement(DataTableCell, null, color), React.createElement(DataTableCell, null, description), React.createElement(DataTableCell, null, origin), React.createElement(DataTableCell, null, calories), React.createElement(DataTableCell, null, fat), React.createElement(DataTableCell, null, protein), React.createElement(DataTableCell, null, calcium));
  });
};
export const items = itemBuilder(mockData, actions);
export const itemsNoActions = itemBuilder(mockData);
export const itemsActionsActionPrimary = itemBuilder(mockData, actions, actionPrimary);
export const itemsActionPrimary = itemBuilder(mockData, null, actionPrimary);
//# sourceMappingURL=items.js.map