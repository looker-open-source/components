import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filters"];

import React, { useState } from 'react';
import { InputFilters } from '..';
const filterWithValue = {
  field: 'status',
  formatValue: value => value.toUpperCase(),
  options: ['Failed', 'Success'],
  value: 'Success'
};
export default function FilterSelected(_ref) {
  let {
      filters: filtersProp = [filterWithValue]
    } = _ref,
    args = _objectWithoutProperties(_ref, _excluded);
  const [controlledFilters, setControlledFilters] = useState(filtersProp);
  return React.createElement(InputFilters, _extends({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
}
//# sourceMappingURL=FilterSelected.js.map