import _extends from "@babel/runtime/helpers/extends";
import { PersonOutline } from '@styled-icons/material';
import React from 'react';
import { AvatarIcon } from '../../Avatar';
import { DataTable, DataTableCell, DataTableItem } from '..';
const data = [{
  description: 'User',
  id: '1',
  indicator: React.createElement(AvatarIcon, {
    color: "key",
    icon: React.createElement(PersonOutline, null)
  }),
  name: 'Gorgonzola'
}, {
  description: 'User',
  id: '2',
  indicator: React.createElement(AvatarIcon, {
    color: "key",
    icon: React.createElement(PersonOutline, null)
  }),
  name: 'Cheddar'
}, {
  description: 'User',
  id: '3',
  indicator: React.createElement(AvatarIcon, {
    color: "key",
    icon: React.createElement(PersonOutline, null)
  }),
  name: `Blue`
}];
const columns = [{
  id: 'id',
  title: 'ID'
}, {
  id: 'name',
  title: 'Name'
}];
const items = data.map(({
  description,
  id,
  indicator,
  name
}) => React.createElement(DataTableItem, {
  key: id,
  id: id
}, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, {
  indicator: indicator,
  description: description
}, name)));

const Template = _ref => {
  let args = _extends({}, _ref);

  return React.createElement(DataTable, args);
};

export const Indicator = Template.bind({});
Indicator.args = {
  children: items,
  columns
};
Indicator.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Indicator.js.map