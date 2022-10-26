import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { InputChips } from '../../Inputs/InputChips/InputChips';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
const FieldChipsComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  const validationMessage = useFormContext(props);
  return React.createElement(FloatingLabelField, _extends({
    id: id,
    validationMessage: validationMessage,
    hasValue: props.values.length > 0,
    checkValueOnBlur: false
  }, pickFieldProps(props)), React.createElement(InputChips, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    id: id,
    onChange: props.onChange,
    ref: ref,
    validationType: validationMessage && validationMessage.type,
    values: props.values
  })));
});
FieldChipsComponent.displayName = 'FieldChipsComponent';
export const FieldChips = styled(FieldChipsComponent).withConfig({
  displayName: "FieldChips",
  componentId: "sc-s2ubsg-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldChips.js.map