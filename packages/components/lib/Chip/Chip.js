import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "disabled", "iconLabel", "onBlur", "onClick", "onDelete", "onKeyUp", "onKeyDown", "readOnly", "prefix", "truncate"];

let _ = t => t,
    _t,
    _t2,
    _t3;

import { maxWidth, reset } from '@looker/design-tokens';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/material/Close';
import { useClickable, useWrapEvent, useTranslation, useID } from '../utils';
import { IconButton } from '../Button/IconButton';
import { Span } from '../Text';
import { truncateCSS } from '../Text/truncate';
const ChipLabel = styled(Span).withConfig({
  displayName: "Chip__ChipLabel",
  componentId: "sc-1stj55z-0"
})(_t || (_t = _`
  ${0}
`), truncateCSS);
const ChipStyle = styled.span.withConfig({
  displayName: "Chip__ChipStyle",
  componentId: "sc-1stj55z-1"
})(_t2 || (_t2 = _`
  ${0}
  ${0}

  align-items: center;
  background: ${0};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${0};
  display: inline-flex;
  font-size: ${0};
  font-weight: ${0};
  height: 28px;
  min-width: 44px;
  padding: ${0};

  ${0} {
    filter: brightness(0.9);
  }

  &:hover,
  &:active,
  &:focus,
  &[aria-selected='true'] {
    background: ${0};
  }

  &.focus,
  &:focus {
    border-color: ${0};
    outline: none;
  }

  &[disabled] {
    background: ${0};
    border-color: ${0};
    color: ${0};
    filter: none;

    &:hover {
      background: ${0};
    }
  }
`), reset, maxWidth, ({
  theme
}) => theme.colors.keySubtle, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.fontWeights.semiBold, ({
  theme: {
    space
  }
}) => `${space.u1} ${space.u2}`, ChipLabel, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.neutralAccent, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.text1, ({
  theme
}) => theme.colors.neutralAccent);
const ChipJSX = forwardRef((props, ref) => {
  const {
    t
  } = useTranslation('Chip');
  const iconLabelText = t('Delete');

  const {
    children,
    disabled,
    iconLabel = iconLabelText,
    onBlur,
    onClick,
    onDelete,
    onKeyUp,
    onKeyDown,
    readOnly = false,
    prefix,
    truncate = true
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const clickableProps = useClickable({
    disabled,
    onBlur,
    onClick,
    onKeyUp
  });

  const handleKeyDown = event => {
    if (event.key === 'Backspace') {
      onDelete && onDelete(event);
    }
  };

  const handleDelete = e => {
    if (!disabled) {
      onDelete && onDelete(e);
    }

    e.stopPropagation();
  };

  const id = useID();
  return React.createElement(ChipStyle, _extends({}, clickableProps, {
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    ref: ref
  }, rest), React.createElement(ChipLabel, {
    truncate: truncate,
    id: id
  }, prefix && React.createElement(ChipLabel, {
    fontWeight: "normal"
  }, prefix, ": "), children), readOnly || disabled || onDelete && React.createElement(IconButton, {
    disabled: disabled,
    icon: React.createElement(Close, {
      role: "presentation"
    }),
    label: iconLabel,
    ml: "xsmall",
    onClick: handleDelete,
    size: "xxsmall",
    "aria-describedby": id
  }));
});
export const Chip = styled(ChipJSX).withConfig({
  displayName: "Chip",
  componentId: "sc-1stj55z-2"
})(_t3 || (_t3 = _``));
//# sourceMappingURL=Chip.js.map