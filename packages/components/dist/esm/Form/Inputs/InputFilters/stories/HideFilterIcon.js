const _excluded = ["hideFilterIcon", "filters", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
      hideFilterIcon = true,
      filters: filtersProp = mockFilters,
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [controlledFilters, setControlledFilters] = useState(filtersProp);
  return React.createElement(InputFilters, _extends({
    hideFilterIcon: hideFilterIcon,
    onChange: setControlledFilters,
    filters: controlledFilters
  }, restProps));
}
//# sourceMappingURL=HideFilterIcon.js.map