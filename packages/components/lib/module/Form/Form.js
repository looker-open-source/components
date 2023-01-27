import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["validationMessages"];

import React, { forwardRef, useContext, createContext } from 'react';
import { SpaceVertical } from '../Layout';
export const FormContext = createContext({});
export const Form = forwardRef((props, ref) => {
  const {
      validationMessages
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(FormContext.Provider, {
    value: {
      validationMessages
    }
  }, React.createElement(SpaceVertical, _extends({
    as: "form"
  }, rest, {
    ref: ref
  })));
});
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