import React from 'react';
import { DataTableAction } from '../Item';
import { useDataTableSortManager } from '../utils';
import { Link } from '../../Link';

const actionsUseDataTableSortManager = () => React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
  onClick: () => alert(`Ordered!!`)
}, "Order"), React.createElement(DataTableAction, {
  onClick: () => alert('Mmmm...')
}, "Make Grilled Cheese"), React.createElement(DataTableAction, {
  onClick: () => alert('Delete')
}, "Delete"));

const columnsUseDataTableSortManager = [{
  hide: true,
  id: 'calories',
  title: 'Calories',
  type: 'number'
}, {
  canSort: true,
  id: 'id',
  title: 'ID',
  type: 'number'
}, {
  canSort: true,
  id: 'name',
  title: 'Name',
  type: 'string'
}, {
  canSort: true,
  id: 'type',
  title: 'Type',
  type: 'string'
}];
const dataUseDataTableSortManager = [{
  calories: 101,
  id: 1,
  name: 'Cheddar',
  type: 'hard, artisan, processed'
}, {
  calories: 102,
  id: 2,
  name: 'Brie',
  type: 'soft, processed'
}, {
  calories: 103,
  id: 3,
  name: React.createElement("a", {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Gouda"),
  type: 'semi-hard, artisan, brined'
}, {
  calories: 104,
  id: 4,
  name: React.createElement(Link, {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "American"),
  type: 'semi-soft, processed'
}];

const Template = () => useDataTableSortManager('Caption...', dataUseDataTableSortManager, columnsUseDataTableSortManager, actionsUseDataTableSortManager);

export const useSortManager = Template.bind({});
useSortManager.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=useSortManager.js.map