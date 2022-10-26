import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef, useContext, createContext } from 'react';
import omit from 'lodash/omit';
import { SpaceVertical } from '../Layout';
export const FormContext = createContext({});
export const Form = forwardRef((props, ref) => React.createElement(FormContext.Provider, {
  value: {
    validationMessages: props.validationMessages
  }
}, React.createElement(SpaceVertical, _extends({
  as: "form"
}, omit(props, 'validationMessages'), {
  ref: ref
}))));
Form.displayName = 'Form';
export function useFormContext({
  name,
  validationMessage
}) {
  const context = useContext(FormContext);
  let vMessage;

  if (context.validationMessages && name) {
    vMessage = context.validationMessages[name];
  } else if (validationMessage) {
    vMessage = validationMessage;
  }

  return vMessage;
}
//# sourceMappingURL=Form.js.map