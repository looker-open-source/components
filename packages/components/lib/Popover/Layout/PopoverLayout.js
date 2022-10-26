import React from 'react';
import { ModalLoading } from '../../Modal/ModalLayout';
import { PopoverContent } from './PopoverContent';
import { PopoverFooter } from './PopoverFooter';
import { PopoverHeader } from './PopoverHeader';
export const PopoverLayout = ({
  children,
  closeButton,
  footer: _footer = true,
  header,
  hideHeader: _hideHeader = false,
  isLoading
}) => {
  const internalFooter = typeof _footer === 'boolean' ? null : _footer;
  return React.createElement(React.Fragment, null, header && React.createElement(PopoverHeader, {
    hidden: _hideHeader,
    hideClose: !!_footer
  }, header), React.createElement(PopoverContent, {
    hasFooter: !!_footer,
    hasHeader: !!header
  }, isLoading ? React.createElement(ModalLoading, null) : children), _footer && React.createElement(PopoverFooter, {
    closeButton: closeButton
  }, internalFooter));
};
//# sourceMappingURL=PopoverLayout.js.map