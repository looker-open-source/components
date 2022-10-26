let _ = t => t,
    _t,
    _t2;

import { ButtonGroup as ButtonGroupComponent, ButtonItem, ProgressCircular } from '@looker/components';
import React from 'react';
import styled, { css } from 'styled-components';
import { ERROR_TYPE } from '../../../../../constants';
export const ButtonGroup = styled(({
  className,
  isLoading,
  onChange,
  options,
  value
}) => isLoading ? React.createElement(ProgressCircular, {
  size: "medium"
}) : React.createElement(ButtonGroupComponent, {
  className: className,
  onChange: onChange,
  options: options,
  value: value
})).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-ikfypj-0"
})(_t || (_t = _`
  ${0}
`), ({
  validationMessage
}) => (validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type) === ERROR_TYPE && css(_t2 || (_t2 = _`
      ${0} {
        border-color: ${0};
      }
    `), ButtonItem, ({
  theme
}) => theme.colors.criticalBorder));
//# sourceMappingURL=ButtonGroup.js.map