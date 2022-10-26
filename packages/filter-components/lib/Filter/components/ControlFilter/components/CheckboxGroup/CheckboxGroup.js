import { CheckboxGroup as CheckboxGroupComponent, ProgressCircular } from '@looker/components';
import React from 'react';
export const CheckboxGroup = ({
  validationMessage,
  inline,
  isLoading,
  onChange,
  options,
  value
}) => isLoading ? React.createElement(ProgressCircular, {
  size: "medium"
}) : React.createElement(CheckboxGroupComponent, {
  inline: inline,
  onChange: onChange,
  options: options,
  value: value,
  validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
});
//# sourceMappingURL=CheckboxGroup.js.map