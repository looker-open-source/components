import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
import { useFormContext } from '../../Form';
import { useID } from '../../../utils';
import { InputTime } from '../../Inputs/InputTime';

const checkValueOnBlur = e => {
  const target = e.currentTarget;
  const inputs = Array.from(target.querySelectorAll('input'));
  return inputs.some(input => input.value !== '');
};

const FieldTimeComponent = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FloatingLabelField, _extends({}, pickFieldProps(props), {
    id: id,
    validationMessage: validationMessage,
    hasValue: getHasValue(props),
    checkValueOnBlur: checkValueOnBlur
  }), React.createElement(InputTime, _extends({}, omitFieldProps(props), {
    width: "100%",
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
});
FieldTimeComponent.displayName = 'FieldTimeComponent';
export const FieldTime = styled(FieldTimeComponent).withConfig({
  displayName: "FieldTime",
  componentId: "sc-105s2jn-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldTime.js.map