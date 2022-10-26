import { getNumberFromString } from '@looker/filter-expressions';
import React from 'react';
import { GroupInput } from '../../../GroupInput';

const getInputValue = value => {
  var _ref;

  const singleValue = (_ref = Array.isArray(value) ? value[0] : value) !== null && _ref !== void 0 ? _ref : '';

  if (['number', 'bigint'].indexOf(typeof singleValue)) {
    return singleValue.toString();
  }

  return singleValue || '';
};

export const SingleNumberInput = ({
  item,
  onChange,
  placement,
  validationMessage
}) => {
  const inputChange = ({
    currentTarget: {
      value
    }
  }) => {
    const numberValue = getNumberFromString(value);
    const newValueArr = value === '' ? [] : [numberValue];

    if (!Number.isNaN(numberValue)) {
      onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
        value: newValueArr
      });
    }
  };

  const inputValue = getInputValue(item.value);
  return React.createElement(GroupInput, {
    type: "number",
    value: inputValue,
    onChange: inputChange,
    placement: placement,
    minWidth: "4.5em",
    "data-testid": "single-number",
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    noErrorIcon: true
  });
};
//# sourceMappingURL=SingleNumberInput.js.map