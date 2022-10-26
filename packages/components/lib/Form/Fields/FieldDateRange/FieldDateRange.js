import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FloatingLabelField } from '../Field/FloatingLabelField';
import { omitFieldProps, pickFieldProps } from '../Field/Field';
import { useFormContext } from '../../Form';
import { useID } from '../../../utils';
import { InputDateRange } from '../../Inputs/InputDateRange';

const checkValueOnBlur = e => {
  const inputs = Array.from(e.currentTarget.querySelectorAll('input'));
  return inputs.some(input => input.value !== '');
};

export const FieldDateRange = styled(forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FloatingLabelField, _extends({}, pickFieldProps(props), {
    checkValueOnBlur: checkValueOnBlur,
    hasValue: !!props.value,
    id: id,
    validationMessage: validationMessage
  }), React.createElement(InputDateRange, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    onChange: props.onChange,
    value: props.value,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
})).withConfig({
  displayName: "FieldDateRange",
  componentId: "sc-xojxrj-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldDateRange.js.map