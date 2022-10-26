import React from 'react';
import { ModalLayout, ModalLoading } from '../../Modal/ModalLayout';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';

const constructDialogHeader = (children, closeButton, detail, footerExists) => {
  if (!children) return null;
  const props = {
    children
  };

  if (detail) {
    props.detail = detail;
  } else if (closeButton || footerExists) {
    props.hideClose = !closeButton;
  }

  return React.createElement(DialogHeader, props);
};

export const DialogLayout = ({
  children,
  footer,
  footerSecondary,
  header,
  headerCloseButton: _headerCloseButton = !footer && true,
  headerDetail,
  isLoading
}) => {
  const dialogFooter = footer ? React.createElement(DialogFooter, {
    secondary: footerSecondary
  }, footer) : null;
  const dialogHeader = constructDialogHeader(header, _headerCloseButton, headerDetail, !!footer);
  return React.createElement(ModalLayout, {
    footer: dialogFooter,
    header: dialogHeader
  }, React.createElement(DialogContent, {
    hasFooter: !!footer,
    hasHeader: !!header
  }, isLoading ? React.createElement(ModalLoading, null) : children));
};
//# sourceMappingURL=DialogLayout.js.map