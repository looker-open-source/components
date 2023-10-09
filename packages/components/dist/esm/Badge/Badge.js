let _ = t => t,
  _t,
  _t2;
const _excluded = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { color, generateIntentShade, intentUIBlend, reset, space, typography, variant } from '@looker/design-tokens';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'xxsmall',
      lineHeight: '16px',
      px: 'u2'
    },
    medium: {
      fontSize: 'xsmall',
      lineHeight: '24px',
      px: 'u2'
    },
    large: {
      fontSize: 'medium',
      lineHeight: '32px',
      px: 'u3'
    }
  }
});
const BadgeLayout = forwardRef((_ref, ref) => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement("span", _extends({
    ref: ref
  }, props), children);
});
const badgeIntent = intent => css(_t || (_t = _`
    background: ${0};
    color: ${0};
  `), intentUIBlend(intent, 1), ({
  theme: {
    colors
  }
}) => generateIntentShade(colors[intent]));
export const Badge = styled(BadgeLayout).attrs(({
  intent: _intent = 'key',
  size: _size = 'medium'
}) => ({
  intent: _intent,
  size: _size
})).withConfig({
  displayName: "Badge",
  componentId: "sc-idhxta-0"
})(_t2 || (_t2 = _`
  ${0}

  border-radius:50px;
  display: inline-flex;
  font-weight: ${0};

  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), reset, ({
  theme
}) => theme.fontWeights.semiBold, color, space, typography, size, ({
  intent
}) => badgeIntent(intent));
//# sourceMappingURL=Badge.js.map