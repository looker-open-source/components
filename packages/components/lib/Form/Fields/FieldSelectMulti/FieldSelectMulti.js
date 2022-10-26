import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { SelectMulti } from '../../Inputs/Select/SelectMulti';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';

const getHasValue = ({
  values,
  defaultValues
}) => {
  if (values !== undefined) return values.length > 0;
  if (defaultValues !== undefined) return defaultValues.length > 0;
  return false;
};

const checkValueOnBlur = e => {
  const target = e.currentTarget;
  const options = target.querySelectorAll('[role="option"]');
  return options.length !== 0;
};

const FieldSelectMultiComponent = forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  return React.createElement(FloatingLabelField, _extends({
    "data-testid": "FieldSelectMultiId"
  }, pickFieldProps(props), {
    id: id,
    ariaLabelOnly: true,
    validationMessage: validationMessage,
    hasValue: getHasValue(props),
    checkValueOnBlur: checkValueOnBlur
  }), React.createElement(SelectMulti, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
});
FieldSelectMultiComponent.displayName = 'FieldSelectMultiComponent';
export const FieldSelectMulti = styled(FieldSelectMultiComponent).withConfig({
  displayName: "FieldSelectMulti",
  componentId: "sc-ze3grr-0"
})(_t || (_t = _`
  width: 100%;
`));
//# sourceMappingURL=FieldSelectMulti.js.map