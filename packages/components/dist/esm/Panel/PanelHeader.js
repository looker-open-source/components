import React from 'react';
import { useTheme } from 'styled-components';
import { ArrowBack } from '@styled-icons/material-rounded/ArrowBack';
import { Heading } from '../Text';
import { useTranslation } from '../utils';
import { Space } from '../Layout';
import { IconButton } from '../Button';
export const PanelHeader = ({
  closeLabel,
  onClose,
  iconToggle: _iconToggle = false,
  title
}) => {
  const {
    t
  } = useTranslation('PanelHeader');
  const defaultLabel = t('CloseTitle', {
    title
  });
  const {
    space
  } = useTheme();
  return React.createElement(Space, {
    as: "header",
    height: space.u10,
    px: "large",
    gap: "u3",
    mt: "small",
    mb: "1.5rem",
    flexShrink: 0
  }, React.createElement(IconButton, {
    icon: React.createElement(ArrowBack, null),
    label: closeLabel || defaultLabel,
    onClick: onClose,
    toggle: _iconToggle,
    toggleBackground: _iconToggle,
    shape: "round",
    size: "small"
  }), React.createElement(Heading, {
    fontSize: "xlarge"
  }, title));
};
//# sourceMappingURL=PanelHeader.js.map