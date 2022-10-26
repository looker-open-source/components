import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["cancelLabel", "close", "confirmLabel", "buttonColor", "cancelColor", "isOpen", "message", "onCancel", "onConfirm", "title"];
import React, { useCallback } from 'react';
import { Button, ButtonTransparent } from '../../Button';
import { useTranslation } from '../../utils';
import { Dialog } from '../Dialog';
import { ConfirmLayout } from './ConfirmLayout';
export const ConfirmationDialog = props => {
  const {
    t
  } = useTranslation('ConfirmationDialog');

  const {
    cancelLabel = t('Cancel'),
    close,
    confirmLabel = t('Confirm'),
    buttonColor = 'key',
    cancelColor = 'neutral',
    isOpen = false,
    message,
    onCancel,
    onConfirm,
    title
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const confirm = useCallback(() => {
    onConfirm(close);
  }, [close, onConfirm]);
  const cancel = useCallback(() => {
    if (onCancel) {
      onCancel(close);
    } else {
      close();
    }
  }, [close, onCancel]);
  return React.createElement(Dialog, _extends({
    isOpen: isOpen,
    onClose: cancel
  }, rest), React.createElement(ConfirmLayout, {
    title: title,
    message: message,
    primaryButton: React.createElement(Button, {
      onClick: confirm,
      color: buttonColor
    }, confirmLabel),
    secondaryButton: React.createElement(ButtonTransparent, {
      color: cancelColor,
      onClick: cancel
    }, cancelLabel)
  }));
};
//# sourceMappingURL=ConfirmationDialog.js.map