let _ = t => t,
    _t,
    _t2,
    _t3;

import { fadeIn } from '@looker/design-tokens';
import omit from 'lodash/omit';
import React from 'react';
import styled, { css } from 'styled-components';
import { simpleLayoutCSS } from '../Layout/utils/simple';
export const animateCSS = css(_t || (_t = _`
  animation-delay: ${0};
  animation-duration: ${0};
`), ({
  delay: _delay = 'none',
  theme
}) => `${theme.transitions[_delay]}ms`, ({
  duration: _duration = 'quick',
  theme
}) => `${theme.transitions[_duration]}ms`);
export const Animate = styled(props => React.createElement("div", omit(props, ['delay', 'duration']))).withConfig({
  displayName: "Animate",
  componentId: "sc-1rb4lia-0"
})(_t2 || (_t2 = _`
  ${0}
  ${0}
`), simpleLayoutCSS, animateCSS);
export const FadeIn = styled(Animate).withConfig({
  displayName: "Animate__FadeIn",
  componentId: "sc-1rb4lia-1"
})(_t3 || (_t3 = _`
  animation-fill-mode: both;
  animation-name: ${0};
`), fadeIn);
//# sourceMappingURL=Animate.js.map