let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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