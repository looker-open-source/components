const _excluded = ["filter", "onDelete"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import { Chip } from '../../../Chip';
const defaultFormatValue = value => value ? value.replace(/(,(?=\S)|:)/, ', ') : undefined;
export const InputFiltersChip = forwardRef((_ref, ref) => {
  let {
      filter,
      onDelete
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const handleDelete = () => onDelete(filter);
  return React.createElement(Chip, _extends({
    onDelete: handleDelete,
    prefix: filter.field,
    ref: ref
  }, props), filter.formatValue && filter.value ? filter.formatValue(filter.value) : defaultFormatValue(filter.value));
});
InputFiltersChip.displayName = 'InputFiltersChip';
//# sourceMappingURL=InputFiltersChip.js.map