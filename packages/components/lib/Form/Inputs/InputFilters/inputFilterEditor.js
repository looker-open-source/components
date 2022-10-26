import React from 'react';
import { CheckboxGroup, RadioGroup } from '../OptionsGroup';
export const inputFilterEditor = ({
  closeEditor,
  filterOptions,
  onChange,
  value
}) => {
  const {
    multiple = false
  } = filterOptions;
  const options = filterOptions.options ? filterOptions.options.map(value => ({
    label: value,
    value
  })) : [];

  const handleChangeCheckbox = newValues => onChange(newValues.sort().join(','));

  const handleChangeRadio = newValue => {
    onChange(newValue);
    closeEditor();
  };

  return multiple ? React.createElement(CheckboxGroup, {
    value: value ? value.split(',') : [],
    options: options,
    onChange: handleChangeCheckbox
  }) : React.createElement(RadioGroup, {
    value: value,
    options: options,
    onChange: handleChangeRadio
  });
};
//# sourceMappingURL=inputFilterEditor.js.map