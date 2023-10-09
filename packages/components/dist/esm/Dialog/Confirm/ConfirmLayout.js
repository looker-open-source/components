import React from 'react';
import { Paragraph } from '../../Text';
import { DialogLayout } from '../Layout';
export const ConfirmLayout = ({
  secondaryButton,
  primaryButton,
  message,
  title
}) => {
  return React.createElement(DialogLayout, {
    header: title,
    footer: React.createElement(React.Fragment, null, primaryButton, secondaryButton)
  }, typeof message === 'string' ? React.createElement(Paragraph, {
    breakword: true
  }, message) : message);
};
//# sourceMappingURL=ConfirmLayout.js.map