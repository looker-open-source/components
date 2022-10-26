let _ = t => t,
    _t;

import { InputChips } from '@looker/components';
import { getNumberFromString } from '@looker/filter-expressions';
import React, { useRef, useEffect, useState } from 'react';
import { inputPlacementStyle, multiInputWidth } from '../../../../../../utils/filter_styles';
import styled from 'styled-components';

const validate = value => {
  return value !== '' && !isNaN(Number(value));
};

export const MultiInputInternal = ({
  className,
  item,
  onChange,
  width,
  placeholder,
  validationMessage
}) => {
  const ref = useRef(null);
  const values = item.value.map(String);
  const [inputValue, setInputValue] = useState('');

  const handleChange = newValues => {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: newValues.map(getNumberFromString)
    });
  };

  useEffect(() => {
    return () => {
      if (validate(inputValue) && !document.body.contains(ref.current)) {
        handleChange([...values, inputValue]);
      }
    };
  }, [inputValue, values]);
  return React.createElement(InputChips, {
    ref: ref,
    width: width || multiInputWidth,
    className: className,
    placeholder: placeholder,
    values: values,
    onChange: handleChange,
    inputValue: inputValue,
    onInputChange: setInputValue,
    validate: validate,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    noErrorIcon: true
  });
};
export const MultiInput = styled(MultiInputInternal).withConfig({
  displayName: "MultiInput",
  componentId: "sc-4quccd-0"
})(_t || (_t = _`
  ${0}
`), inputPlacementStyle);
//# sourceMappingURL=MultiInput.js.map