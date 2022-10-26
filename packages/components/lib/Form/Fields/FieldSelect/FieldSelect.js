import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { Select } from '../../Inputs/Select/Select';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
const FieldSelectComponent = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FloatingLabelField, _extends({}, pickFieldProps(props), {
    id: id,
    validationMessage: validationMessage,
    hasValue: getHasValue(props)
  }), React.createElement(Select, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    validationType: validationMessage && validationMessage.type,
    ref: ref,
    wrapperAriaLabel: `${props.label}`
  })));
});
FieldSelectComponent.displayName = 'FieldSelectComponent';
export const FieldSelect = styled(FieldSelectComponent).withConfig({
  displayName: "FieldSelect",
  componentId: "sc-60bbtf-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldSelect.js.map