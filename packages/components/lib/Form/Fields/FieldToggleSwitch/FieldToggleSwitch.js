import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { ToggleSwitch } from '../../Inputs/ToggleSwitch/ToggleSwitch';
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field';
const FieldToggleSwitchLayout = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FieldInline, _extends({}, pickFieldProps(props), {
    validationMessage: validationMessage,
    id: id
  }), React.createElement(ToggleSwitch, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    id: id,
    validationType: validationMessage && validationMessage.type,
    ref: ref,
    mr: "u1"
  })));
});
FieldToggleSwitchLayout.displayName = 'FieldToggleSwitchLayout';
export const FieldToggleSwitch = styled(FieldToggleSwitchLayout).withConfig({
  displayName: "FieldToggleSwitch",
  componentId: "sc-22i885-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldToggleSwitch.js.map