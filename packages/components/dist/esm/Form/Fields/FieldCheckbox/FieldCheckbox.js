let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { Checkbox } from '../../Inputs/Checkbox/Checkbox';
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field';
const FieldCheckboxLayout = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FieldInline, _extends({}, pickFieldProps(props), {
    validationMessage: validationMessage,
    id: id
  }), React.createElement(Checkbox, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    id: id,
    validationType: validationMessage && validationMessage.type || props.validationType,
    ref: ref
  })));
});
FieldCheckboxLayout.displayName = 'FieldCheckboxLayout';
export const FieldCheckbox = styled(FieldCheckboxLayout).withConfig({
  displayName: "FieldCheckbox",
  componentId: "sc-xffymf-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldCheckbox.js.map