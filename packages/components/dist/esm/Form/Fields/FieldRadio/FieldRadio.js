let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { Radio } from '../../Inputs/Radio/Radio';
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field';
const FieldRadioLayout = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FieldInline, _extends({
    id: id,
    validationMessage: validationMessage
  }, pickFieldProps(props)), React.createElement(Radio, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    id: id,
    ref: ref,
    validationType: validationMessage && validationMessage.type || props.validationType
  })));
});
FieldRadioLayout.displayName = 'FieldRadioLayout';
export const FieldRadio = styled(FieldRadioLayout).withConfig({
  displayName: "FieldRadio",
  componentId: "sc-1ey14ql-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldRadio.js.map