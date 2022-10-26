import React, { useContext } from 'react';
import { InputTextContent } from '../../Inputs/InputText';
import { ComboboxContext } from '../Combobox';
export function getOptionIcon(value, options) {
  if (value && options) {
    const option = options.find(opt => opt.value === value);
    return option !== null && option !== void 0 && option.icon ? React.createElement(InputTextContent, {
      pl: "u2"
    }, option.icon) : null;
  }

  return null;
}
export const SelectInputIcon = ({
  options
}) => {
  const {
    data: {
      option,
      inputValue
    }
  } = useContext(ComboboxContext);
  if (!options || !option) return null;
  if (option.label !== inputValue) return null;
  return getOptionIcon(option.value, options);
};
//# sourceMappingURL=SelectInputIcon.js.map