import React, { useRef, useState, cloneElement, isValidElement } from 'react';
import { Assignment } from '@styled-icons/material/Assignment';
import { Done } from '@styled-icons/material/Done';
import { ButtonOutline } from '../Button/ButtonOutline';
import { MultiFunctionButton } from '../Button/MultiFunctionButton';
import { useTranslation } from '../utils';
export const CopyToClipboard = props => {
  const {
    t
  } = useTranslation('CopyToClipboard');
  const childrenText = t('Copy to Clipboard');
  const successText = t('Copied');
  const {
    children = childrenText,
    content,
    success = successText
  } = props;
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef(null);

  const clickCopyButton = () => {
    const textField = document.createElement('textarea');
    textField.value = content;

    if (buttonRef.current) {
      buttonRef.current.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const copyButton = isValidElement(children) ? cloneElement(children, {
    onClick: clickCopyButton,
    ref: buttonRef
  }) : React.createElement(ButtonOutline, {
    iconBefore: React.createElement(Assignment, null),
    onClick: clickCopyButton,
    ref: buttonRef
  }, children);
  const successButton = typeof success === 'string' ? React.createElement(ButtonOutline, {
    "aria-live": "polite",
    iconBefore: React.createElement(Done, null)
  }, success) : cloneElement(success, {
    'aria-live': 'polite'
  });
  return React.createElement(MultiFunctionButton, {
    alternate: successButton,
    ref: buttonRef,
    swap: copied
  }, copyButton);
};
//# sourceMappingURL=CopyToClipboard.js.map