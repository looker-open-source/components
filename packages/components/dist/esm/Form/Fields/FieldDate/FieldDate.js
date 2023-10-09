let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FloatingLabelField } from '../Field/FloatingLabelField';
import { omitFieldProps, pickFieldProps } from '../Field/Field';
import { useFormContext } from '../../Form';
import { useID } from '../../../utils/useID';
import { InputDate } from '../../Inputs/InputDate';
export const FieldDate = styled(forwardRef((props, ref) => {
  const {
    defaultValue,
    id,
    onChange,
    value
  } = props;
  const validationMessage = useFormContext(props);
  return React.createElement(FloatingLabelField, _extends({
    checkValueOnBlur: false,
    hasValue: !!defaultValue || !!value,
    id: useID(id),
    validationMessage: validationMessage
  }, pickFieldProps(props)), React.createElement(InputDate, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: useID(id),
    onChange: onChange,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
})).withConfig({
  displayName: "FieldDate",
  componentId: "sc-1qj123p-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldDate.js.map