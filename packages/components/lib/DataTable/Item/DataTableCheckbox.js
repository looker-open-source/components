import React from 'react';
import { Checkbox } from '../../Form';
import { ItemTarget } from './ItemTarget';
export const checkListProps = ['checked', 'disabled', 'onChange', 'id'];
export const DataTableCheckbox = ({
  id,
  onChange,
  checked,
  disabled
}) => {
  const handleCellOnClick = () => !disabled && onChange && onChange();

  const handleOnKeyDown = event => event.key === 'Enter' && event.currentTarget.click();

  let ariaLabel = 'Select all rows';

  if (id !== 'headerId') {
    ariaLabel = undefined;
  } else if (checked) {
    ariaLabel = 'Select none';
  }

  return React.createElement(ItemTarget, {
    "aria-labelledby": `rowheader-${id}`,
    onClick: handleCellOnClick
  }, React.createElement(Checkbox, {
    "aria-label": ariaLabel,
    checked: checked,
    disabled: disabled,
    onKeyDown: handleOnKeyDown,
    tabIndex: -1
  }));
};
//# sourceMappingURL=DataTableCheckbox.js.map