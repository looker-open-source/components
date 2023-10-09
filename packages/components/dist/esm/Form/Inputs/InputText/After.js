import React from 'react';
import { Span } from '../../../Text';
import { ErrorIcon } from '../ErrorIcon';
import { InputTextContent } from './InputTextContent';
export const After = ({
  after,
  iconAfter,
  noErrorIcon,
  validationType
}) => {
  const iconAfterOrSuffix = (iconAfter || typeof after === 'string') && React.createElement(InputTextContent, {
    pl: "u2",
    pr: "u2"
  }, iconAfter || React.createElement(Span, {
    fontSize: "small"
  }, after));
  const validationIcon = !noErrorIcon && validationType === 'error' && React.createElement(InputTextContent, {
    pl: after || iconAfter ? 'u1' : 'u2',
    pr: "u2"
  }, React.createElement(ErrorIcon, null));
  return React.createElement(React.Fragment, null, iconAfterOrSuffix ? React.createElement(React.Fragment, null, iconAfterOrSuffix, validationIcon) : after || validationIcon);
};
//# sourceMappingURL=After.js.map