import { ButtonToggle, ProgressCircular } from '@looker/components';
import React from 'react';
export const ButtonToggles = ({
  isLoading,
  onChange,
  options,
  value
}) => isLoading ? React.createElement(ProgressCircular, {
  size: "medium"
}) : React.createElement(ButtonToggle, {
  onChange: onChange,
  options: options,
  value: value
});
//# sourceMappingURL=ButtonToggles.js.map