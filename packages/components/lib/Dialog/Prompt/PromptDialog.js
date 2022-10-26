import React, { useState, useCallback, useEffect } from 'react';
import { Button, ButtonTransparent } from '../../Button';
import { Label, InputText } from '../../Form';
import { useTranslation } from '../../utils';
import { VisuallyHidden } from '../../VisuallyHidden';
import { Dialog, DialogLayout } from '..';
export const PromptDialog = props => {
  const {
    t
  } = useTranslation('PromptDialog');
  const cancelLabelText = t('Cancel');
  const saveLabelText = t('Save');
  const {
    cancelColor = 'neutral',
    cancelLabel = cancelLabelText,
    clearOnCancel,
    close,
    defaultValue = '',
    isOpen,
    inputLabel,
    onSave,
    onCancel,
    saveLabel = saveLabelText,
    secondary,
    title
  } = props;
  const [value, setValue] = useState(defaultValue);
  const hasValue = !!value.trim();
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const handleClose = useCallback(() => {
    close();
  }, [close]);

  const onChange = event => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = useCallback(() => {
    onSave(value, handleClose);
  }, [handleClose, onSave, value]);
  const cancel = useCallback(() => {
    if (onCancel) {
      onCancel(handleClose);
    } else {
      handleClose();
    }

    clearOnCancel && setValue('');
  }, [clearOnCancel, handleClose, onCancel]);

  const onKeyDown = event => {
    if (event.key === 'Enter' && hasValue) {
      onSubmit();
    } else if (event.key === 'Escape') {
      cancel();
    }
  };

  const footer = React.createElement(React.Fragment, null, React.createElement(Button, {
    disabled: !hasValue,
    type: "submit",
    onClick: onSubmit,
    color: "key"
  }, saveLabel), React.createElement(ButtonTransparent, {
    type: "reset",
    color: cancelColor,
    onClick: cancel
  }, cancelLabel));
  return React.createElement(Dialog, {
    width: "30rem",
    isOpen: isOpen,
    onClose: cancel
  }, React.createElement(DialogLayout, {
    header: title,
    footer: footer,
    footerSecondary: secondary
  }, React.createElement(VisuallyHidden, null, React.createElement(Label, {
    htmlFor: "promptInput"
  }, inputLabel)), React.createElement(InputText, {
    autoFocus: true,
    onKeyDown: onKeyDown,
    id: "promptInput",
    placeholder: inputLabel,
    onChange: onChange,
    width: "100%",
    value: value
  })));
};
//# sourceMappingURL=PromptDialog.js.map