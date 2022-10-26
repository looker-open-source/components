import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "isExternal"];

let _ = t => t,
    _t,
    _t2;

import { reset, typography, omitStyledProps } from '@looker/design-tokens';
import { Launch } from '@styled-icons/material/Launch';
import omit from 'lodash/omit';
import styled from 'styled-components';
import React, { forwardRef } from 'react';
const ExternalLinkIndicator = styled(Launch).withConfig({
  displayName: "Link__ExternalLinkIndicator",
  componentId: "sc-165dqum-0"
})(_t || (_t = _`
  height: ${0};
  margin-left: ${0};
  width: ${0};
`), ({
  theme
}) => theme.sizes.xxsmall, ({
  theme
}) => theme.space.u1, ({
  theme
}) => theme.sizes.xxsmall);

const generateLinkTypes = ({
  dangerouslyDisableRel,
  isExternal,
  rel,
  target
}) => {
  if (dangerouslyDisableRel) return rel;
  const linkTypes = rel ? rel.split(' ') : [];

  if (target === '_blank') {
    linkTypes.push('noopener', 'noreferrer');
  } else if (isExternal) {
    linkTypes.push('external', 'noreferrer');
  }

  return [...new Set(linkTypes)].join(' ');
};

const linkStyleProps = ['keyColor', 'underline'];
const LinkLayout = forwardRef((props, ref) => {
  const {
    children,
    isExternal
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  const enhancedRel = generateLinkTypes(props);
  return React.createElement("a", _extends({}, omit(omitStyledProps(restProps), [...linkStyleProps, 'dangerouslyDisableRel']), {
    ref: ref,
    rel: enhancedRel
  }), children, isExternal && React.createElement(ExternalLinkIndicator, null));
});
export const Link = styled(LinkLayout).withConfig({
  displayName: "Link",
  componentId: "sc-165dqum-1"
})(_t2 || (_t2 = _`
  ${0}
  ${0}

  color: ${0};
  text-decoration: ${0};

  &[aria-expanded='true'],
  &:focus,
  &:hover,
  &:active,
  &.active,
  &:visited {
    color: ${0};
    outline: none;
    text-decoration: ${0};
  }
`), reset, typography, ({
  keyColor,
  theme: {
    colors
  }
}) => keyColor ? colors.key : colors.link, ({
  underline
}) => underline === true ? 'underline' : 'none', ({
  keyColor,
  theme: {
    colors
  }
}) => keyColor ? colors.keyInteractive : colors.linkInteractive, ({
  underline
}) => underline === false ? 'none' : 'underline');
//# sourceMappingURL=Link.js.map