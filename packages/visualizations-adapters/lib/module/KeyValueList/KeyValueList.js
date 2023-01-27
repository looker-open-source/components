let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;

import React from 'react';
import styled from 'styled-components';
import { Truncate } from '@looker/components';
import { useTranslation } from '../utils';
const renderKeyValueList = (o, i18n) => {
  const {
    t
  } = i18n;
  const collection = Object.entries(o);
  const renderValueByType = v => {
    switch (typeof v) {
      case 'object':
        return v === null ? t('null') : renderKeyValueList(v, i18n);
      case 'boolean':
        return v ? t('true') : t('false');
      case 'undefined':
        return t('undefined');
      default:
        return v;
    }
  };
  return React.createElement(DL, null, collection.map(pair => {
    const [key, value] = pair;
    return React.createElement(ListRow, {
      key: key
    }, React.createElement(DT, null, React.createElement(Truncate, null, key)), React.createElement(DD, null, renderValueByType(value)));
  }));
};
const ListRow = styled.div.withConfig({
  displayName: "KeyValueList__ListRow",
  componentId: "sc-o6y831-0"
})(_t || (_t = _`
  border-top: 1px solid ${0};
  padding: ${0} 0;
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.space.xsmall);
const DD = styled.dd.withConfig({
  displayName: "KeyValueList__DD",
  componentId: "sc-o6y831-1"
})(_t2 || (_t2 = _`
  font-size: ${0};
  line-height: ${0};
  margin: 0;
  margin-left: ${0};
`), ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.lineHeights.large, ({
  theme
}) => theme.space.xlarge);
const DL = styled.dl.withConfig({
  displayName: "KeyValueList__DL",
  componentId: "sc-o6y831-2"
})(_t3 || (_t3 = _`
  margin: 0;
  ${0} & {
    margin-top: ${0};
  }
`), DD, ({
  theme
}) => theme.space.xsmall);
const DT = styled.dt.withConfig({
  displayName: "KeyValueList__DT",
  componentId: "sc-o6y831-3"
})(_t4 || (_t4 = _`
  border-bottom: 1px;
  color: ${0};
  font-size: ${0};
  font-weight: ${0};
  line-height: ${0};
  margin: 0;
`), ({
  theme
}) => theme.colors.ui4, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.fontWeights.semiBold, ({
  theme
}) => theme.lineHeights.small);
export const KeyValueList = ({
  value
}) => {
  const i18n = useTranslation('KeyValueList');
  return renderKeyValueList(value, i18n);
};
//# sourceMappingURL=KeyValueList.js.map