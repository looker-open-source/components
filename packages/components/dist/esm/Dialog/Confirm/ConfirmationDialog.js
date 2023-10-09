const _excluded = ["cancelLabel", "close", "confirmLabel", "buttonColor", "cancelColor", "isOpen", "message", "onCancel", "onConfirm", "title"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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