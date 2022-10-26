let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../../utils';
import { VisuallyHidden } from '../../../VisuallyHidden';

const RequiredStarLayout = ({
  className
}) => {
  const {
    t
  } = useTranslation('RequiredStar');
  return React.createElement("span", {
    "aria-hidden": "true",
    className: className,
    "data-testid": "requiredStar"
  }, React.createElement(VisuallyHidden, null, ` ${t('required')}`));
};

export const RequiredStar = styled(RequiredStarLayout).withConfig({
  displayName: "RequiredStar",
  componentId: "sc-jh9e0g-0"
})(_t || (_t = _`
  &::before {
    color: ${0};
    content: ' *';
  }
`), ({
  theme
}) => theme.colors.critical);
//# sourceMappingURL=RequiredStar.js.map