const _excluded = ["validationMessages"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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