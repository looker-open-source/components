import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["children"];
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