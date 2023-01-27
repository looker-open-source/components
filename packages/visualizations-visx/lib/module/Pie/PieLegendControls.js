let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;

import React from 'react';
import { KeyboardArrowUp, KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowLeft } from '@styled-icons/material';
import { IconButton } from '@looker/components';
import styled, { css } from 'styled-components';
import { useTranslation } from '../utils';
export const PieLegendControls = ({
  orientation,
  contentRect,
  containerRect,
  page,
  totalPages,
  handleNextClick,
  handlePrevClick
}) => {
  const {
    t
  } = useTranslation('PieLegendControls');
  return React.createElement(React.Fragment, null, contentRect.height > containerRect.height && orientation === 'vertical' && React.createElement(LegendControls, {
    orientation: orientation
  }, React.createElement(CondensedIconButton, {
    shape: "square",
    p: "small",
    icon: React.createElement(KeyboardArrowUp, null),
    onClick: handlePrevClick,
    disabled: page === 0,
    size: "large",
    label: t('Previous page')
  }), React.createElement("span", null, page + 1, "/", totalPages + 1), React.createElement(CondensedIconButton, {
    shape: "square",
    icon: React.createElement(KeyboardArrowDown, null),
    onClick: handleNextClick,
    disabled: page === totalPages,
    p: "small",
    size: "large",
    label: t('Next page')
  })), contentRect.width > containerRect.width && orientation === 'horizontal' && React.createElement(LegendControls, {
    orientation: orientation
  }, React.createElement(CondensedIconButton, {
    shape: "square",
    p: "small",
    icon: React.createElement(KeyboardArrowRight, null),
    onClick: handleNextClick,
    disabled: page === totalPages,
    size: "large",
    label: t('Next page')
  }), React.createElement("span", null, page + 1, "/", totalPages + 1), React.createElement(CondensedIconButton, {
    shape: "square",
    icon: React.createElement(KeyboardArrowLeft, null),
    onClick: handlePrevClick,
    disabled: page === 0,
    p: "small",
    size: "large",
    label: t('Previous page')
  })));
};
const LegendControls = styled.div.withConfig({
  displayName: "PieLegendControls__LegendControls",
  componentId: "sc-x61jcd-0"
})(_t || (_t = _`
  align-items: center;
  display: grid;
  grid-gap: ${0};
  justify-items: center;
  ${0}
`), ({
  theme
}) => theme.space.xxsmall, ({
  orientation,
  theme
}) => {
  if (orientation === 'horizontal') {
    return css(_t2 || (_t2 = _`
        border-left: 1px solid ${0};
        grid-template-rows: auto auto auto;
        padding-left: ${0};
      `), theme.colors.ui2, theme.space.xxsmall);
  } else {
    return css(_t3 || (_t3 = _`
        border-top: 1px solid ${0};
        grid-template-columns: auto auto auto 1fr;
        padding-top: ${0};
      `), theme.colors.ui2, theme.space.xxsmall);
  }
});
const CondensedIconButton = styled(IconButton).withConfig({
  displayName: "PieLegendControls__CondensedIconButton",
  componentId: "sc-x61jcd-1"
})(_t4 || (_t4 = _`
  height: auto;
  padding: 0;
`));
//# sourceMappingURL=PieLegendControls.js.map