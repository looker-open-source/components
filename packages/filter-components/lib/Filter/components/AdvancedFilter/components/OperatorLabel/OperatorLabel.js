import { Span } from '@looker/components';
import React from 'react';
import { useTranslation } from '../../../../../utils';
export const OperatorLabel = ({
  value
}) => {
  const {
    t
  } = useTranslation('OperatorLabel');
  return React.createElement(Span, {
    color: "text1",
    fontSize: "small"
  }, value ? t('OR') : t('AND'));
};
//# sourceMappingURL=OperatorLabel.js.map