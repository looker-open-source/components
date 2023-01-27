
import React from 'react';
import { Info } from '@styled-icons/material/Info';
import { Icon, Tooltip } from '@looker/components';
export const FieldInfo = ({
  content
}) => {
  return React.createElement(Tooltip, {
    content: content
  }, React.createElement(Icon, {
    icon: React.createElement(Info, null),
    size: "xxsmall",
    color: "ui4"
  }));
};
//# sourceMappingURL=FieldInfo.js.map