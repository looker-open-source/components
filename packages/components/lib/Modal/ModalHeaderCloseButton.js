let _ = t => t,
    _t;

import React, { useContext } from 'react';
import { Close } from '@styled-icons/material/Close';
import styled from 'styled-components';
import { IconButton } from '../Button';
import { DialogContext } from '../Dialog';
import { useTranslation } from '../utils';

const ModalHeaderCloseButtonLayout = ({
  size: _size = 'medium'
}) => {
  const {
    t
  } = useTranslation('ModalHeaderCloseButton');
  const {
    busy,
    closeModal,
    id
  } = useContext(DialogContext);
  return React.createElement(IconButton, {
    id: id ? `${id}-iconButton` : undefined,
    size: _size,
    onClick: closeModal,
    label: t('Close'),
    icon: React.createElement(Close, null),
    "data-notooltip": busy || undefined
  });
};

export const ModalHeaderCloseButton = styled(ModalHeaderCloseButtonLayout).withConfig({
  displayName: "ModalHeaderCloseButton",
  componentId: "sc-r02xkz-0"
})(_t || (_t = _``));
//# sourceMappingURL=ModalHeaderCloseButton.js.map