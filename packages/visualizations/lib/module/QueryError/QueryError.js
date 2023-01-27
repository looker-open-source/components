

import React from 'react';
import { Space, Icon, SpaceVertical } from '@looker/components';
import { ErrorOutline } from '@styled-icons/material/ErrorOutline';
import { useTranslation } from '../utils';
export const QueryError = ({
  message
}) => {
  const {
    t
  } = useTranslation('QueryError');
  return React.createElement(SpaceVertical, {
    p: "medium",
    gap: "xxsmall"
  }, React.createElement(Space, {
    justify: "center"
  }, React.createElement(Icon, {
    icon: React.createElement(ErrorOutline, null),
    size: "large",
    color: "ui4"
  })), React.createElement(Space, {
    justify: "center",
    color: "text2",
    gap: "xxsmall"
  }, React.createElement("strong", null, t('Error'), ":"), React.createElement("span", null, message)));
};
//# sourceMappingURL=QueryError.js.map