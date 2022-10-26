import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { InputText, InputTextContext } from '../../Inputs/InputText';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
const FieldTextComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  const validationMessage = useFormContext(props);
  const {
    space
  } = useTheme();
  const [beforeWidth, setBeforeWidth] = useState(0);
  let labelOffset;

  if (props.iconBefore) {
    labelOffset = space.u8;
  } else if (props.before) {
    labelOffset = `${beforeWidth}px`;
  }

  return React.createElement(InputTextContext.Provider, {
    value: {
      beforeWidth,
      setBeforeWidth
    }
  }, React.createElement(FloatingLabelField, _extends({
    id: id,
    validationMessage: validationMessage,
    hasValue: getHasValue(props),
    labelOffset: labelOffset
  }, pickFieldProps(props)), React.createElement(InputText, _extends({}, omitFieldProps(props), {
    id: id,
    "aria-describedby": `describedby-${id}`,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  }))));
});
FieldTextComponent.displayName = 'FieldTextComponent';
export const FieldText = styled(FieldTextComponent).withConfig({
  displayName: "FieldText",
  componentId: "sc-rg64oz-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldText.js.map