import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filter"];

import React from 'react';
import { DashboardFilter } from '../DashboardFilter';
export default function Basic(_ref) {
  let {
      filter = {
        field: {
          is_numeric: true
        },
        id: '1',
        name: 'Cost',
        type: 'field_filter',
        allow_multiple_values: true
      }
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(DashboardFilter, _extends({
    filter: filter
  }, props));
}
//# sourceMappingURL=Basic.js.map