import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filters", "onChange"];

import React, { useState } from 'react';
import { InputFilters } from '../';
const mockFilters = [{
  field: 'role',
  options: ['admin', 'group-admin', 'user', 'pizza']
}, {
  field: 'group',
  label: 'Group',
  options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella']
}, {
  field: 'name',
  label: 'Name',
  options: ['Name 1', 'Name 2', 'Name 3']
}, {
  field: 'status',
  options: ['Failed', 'In-Progress', 'Success']
}, {
  field: 'buildAt',
  label: 'Last Build Time',
  options: ['01-22-20', '02-13-20', '05-28-20']
}];
export default function Basic(props) {
  const {
      filters: filtersProp = mockFilters,
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [controlledFilters, setControlledFilters] = useState(filtersProp);
  return React.createElement(InputFilters, _extends({
    onChange: setControlledFilters,
    filters: controlledFilters
  }, restProps));
}
//# sourceMappingURL=Basic.js.map