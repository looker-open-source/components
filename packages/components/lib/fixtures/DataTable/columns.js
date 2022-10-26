import React from 'react';
import { Info } from '@styled-icons/material/Info';
export const columns = [{
  canSort: true,
  id: 'name',
  size: 'medium',
  title: 'Name',
  type: 'string'
}, {
  canSort: true,
  id: 'status',
  title: 'Status',
  titleIcon: React.createElement(Info, null),
  type: 'string'
}, {
  canSort: true,
  hide: false,
  id: 'inventory',
  title: 'Inventory',
  type: 'number'
}, {
  canSort: true,
  id: 'color',
  size: 'nowrap',
  title: 'Color',
  type: 'string'
}, {
  canSort: true,
  id: 'description',
  size: 'large',
  title: 'Description',
  type: 'string'
}, {
  canSort: true,
  id: 'origin',
  size: 'medium',
  title: 'Origin / Region / Proof of truncated headers',
  type: 'string'
}, {
  canSort: true,
  hide: true,
  id: 'calories',
  title: 'Calories',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'fat',
  title: 'Fat',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'protein',
  title: 'Protein',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'calcium',
  title: 'Calcium',
  type: 'number'
}];
//# sourceMappingURL=columns.js.map