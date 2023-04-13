

import { SpaceVertical, Heading, Paragraph } from '@looker/components';
import React from 'react';
import { useTranslation } from '../utils';
export const NoMatchingFields = ({
  px
}) => {
  const {
    t
  } = useTranslation('NoMatchingFields');
  return React.createElement(SpaceVertical, {
    px: px,
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h5",
    color: "text1",
    fontWeight: "bold"
  }, t('No Matching Fields')), React.createElement(Paragraph, {
    color: "text1",
    fontSize: "small"
  }, t('Try Something Else')));
};
//# sourceMappingURL=NoMatchingFields.js.map