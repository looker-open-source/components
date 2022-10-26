import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled", "clearIconLabel", "isVisibleOptions", "onClear", "showCaret", "showClear", "summary", "errorIcon"];

let _ = t => t,
    _t,
    _t2,
    _t3;

import { Close } from '@styled-icons/material/Close';
import { Error } from '@styled-icons/material/Error';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import { ArrowDropUp } from '@styled-icons/material/ArrowDropUp';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../Button';
import { iconButtonColor } from '../../Button/iconButtonColor';
import { Icon } from '../../Icon';
import { Span } from '../../Text';
import { useTranslation } from '../../utils';
export const AdvancedInputControls = styled(props => {
  const {
    t
  } = useTranslation('AdvancedInputControls');
  const clearIconLabelText = t('Clear Field');

  const {
    disabled,
    clearIconLabel = clearIconLabelText,
    isVisibleOptions,
    onClear,
    showCaret,
    showClear,
    summary,
    errorIcon
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  return React.createElement("div", rest, summary && React.createElement(Span, {
    color: "text1",
    fontSize: "small",
    style: {
      whiteSpace: 'nowrap'
    },
    pr: "u2"
  }, summary), summary && showClear && React.createElement(SearchControlDivider, null), showClear && React.createElement(IconButton, {
    size: "small",
    icon: React.createElement(Close, {
      role: "presentation"
    }),
    label: clearIconLabel,
    onClick: onClear,
    tooltipDisabled: disabled,
    disabled: disabled,
    mr: "u1"
  }), showClear && showCaret && React.createElement(SearchControlDivider, null), showCaret && React.createElement(CaretIcon, {
    icon: isVisibleOptions ? React.createElement(ArrowDropUp, {
      role: "presentation"
    }) : React.createElement(ArrowDropDown, {
      role: "presentation"
    }),
    "data-testid": "caret",
    mr: "u1"
  }), errorIcon && React.createElement(Icon, {
    size: "xsmall",
    icon: React.createElement(Error, {
      role: "presentation"
    }),
    color: "critical",
    mr: "u1"
  }));
}).withConfig({
  displayName: "AdvancedInputControls",
  componentId: "sc-1e7uo3l-0"
})(_t || (_t = _`
  align-items: center;
  display: flex;
  max-height: 1.9rem;
  padding-right: ${0};
`), ({
  theme
}) => theme.space.u1);
const SearchControlDivider = styled.div.withConfig({
  displayName: "AdvancedInputControls__SearchControlDivider",
  componentId: "sc-1e7uo3l-1"
})(_t2 || (_t2 = _`
  background: ${0};
  height: ${0};
  margin-right: ${0};
  width: 1px;
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.space.u5, ({
  theme
}) => theme.space.u1);
const CaretIcon = styled(Icon).withConfig({
  displayName: "AdvancedInputControls__CaretIcon",
  componentId: "sc-1e7uo3l-2"
})(_t3 || (_t3 = _`
  ${0}
  cursor: default;
`), iconButtonColor);
//# sourceMappingURL=AdvancedInputControls.js.map