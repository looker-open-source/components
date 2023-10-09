const _excluded = ["delay", "duration"];
let _ = t => t,
  _t,
  _t2,
  _t3;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { fadeIn } from '@looker/design-tokens';
import React from 'react';
import styled, { css } from 'styled-components';
import { simpleLayoutCSS } from '../Layout/utils/simple';
export const animateCSS = css(_t || (_t = _`
  animation-delay: ${0};
  animation-duration: ${0};
`), ({
  delay: _delay2 = 'none',
  theme
}) => `${theme.transitions[_delay2]}ms`, ({
  duration: _duration2 = 'quick',
  theme
}) => `${theme.transitions[_duration2]}ms`);
export const Animate = styled(props => {
  const {
      delay: _delay,
      duration: _duration
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement("div", rest);
}).withConfig({
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