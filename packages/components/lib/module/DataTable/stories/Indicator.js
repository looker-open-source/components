
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { DataTableItem, DataTableCell, DataTable, Link, Icon } from '../..';
export default function Indicator() {
  const link = React.createElement(Link, {
    onClick: event => event.stopPropagation(),
    href: "https://en.wikipedia.org/wiki/Cheddar_cheese"
  }, "Wikipedia");
  const indicator = React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Person, null),
    color: "key",
    size: 24,
    marginRight: "small"
  });
  const columns = [{
    id: 'name',
    title: 'Name',
    type: 'string'
  }];
  return React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, React.createElement(DataTableItem, {
    id: 'cheddar',
    onClick: () => alert(`Row clicked`)
  }, React.createElement(DataTableCell, {
    description: link,
    indicator: indicator
  }, "Cheddar")));
}
//# sourceMappingURL=Indicator.js.map