import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { TextArea } from '../../Inputs/TextArea';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
export const FieldTextArea = styled(props => {
  const id = useID(props.id);
  const validationMessage = useFormContext(props);
  return React.createElement(FloatingLabelField, _extends({}, pickFieldProps(props), {
    id: id,
    validationMessage: validationMessage,
    hasValue: getHasValue(props)
  }), React.createElement(TextArea, _extends({}, omitFieldProps(props), {
    id: id,
    "aria-describedby": `describedby-${id}`,
    validationType: validationMessage && validationMessage.type
  })));
}).withConfig({
  displayName: "FieldTextArea",
  componentId: "sc-1nmc8fy-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldTextArea.js.map