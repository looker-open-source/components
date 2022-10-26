import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filter", "onDelete"];
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