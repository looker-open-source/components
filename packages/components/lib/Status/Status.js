import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["className", "title", "intent"];
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import { Error } from '@styled-icons/material/Error';
import { Info } from '@styled-icons/material/Info';
import { Warning } from '@styled-icons/material/Warning';
import { color, size } from '@looker/design-tokens';
import omit from 'lodash/omit';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from '../utils';

const getIntentIcon = intent => {
  switch (intent) {
    case 'critical':
      return Error;

    case 'positive':
      return CheckCircle;

    case 'warn':
      return Warning;

    case 'neutral':
    case 'inform':
    default:
      return Info;
  }
};

export const getIntentLabel = (t, intent) => {
  switch (intent) {
    case 'critical':
      return t('Error', {
        ns: 'GetIntentLabel'
      });

    case 'inform':
      return t('Inform', {
        ns: 'GetIntentLabel'
      });

    case 'positive':
      return t('Success', {
        ns: 'GetIntentLabel'
      });

    case 'warn':
      return t('Warning', {
        ns: 'GetIntentLabel'
      });

    case 'neutral':
    default:
      return undefined;
  }
};
const defaultIntent = 'neutral';
const StatusLayout = forwardRef((_ref, ref) => {
  let {
    className,
    title,
    intent = defaultIntent
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = useTranslation('Status');
  const Component = getIntentIcon(intent);
  return React.createElement(Component, _extends({}, omit(props, 'size', 'crossOrigin'), {
    className: className,
    ref: ref,
    title: !props['aria-describedby'] ? title || getIntentLabel(t, intent) : undefined
  }));
});
StatusLayout.displayName = 'StatusLayout';
export const Status = styled(StatusLayout).attrs(({
  intent: _intent = defaultIntent,
  size: _size = 'medium'
}) => ({
  color: _intent,
  size: _size
})).withConfig({
  displayName: "Status",
  componentId: "sc-hjs0z2-0"
})(_t || (_t = _`
  ${0}
  ${0}
  flex-shrink: 0;
`), color, size);
//# sourceMappingURL=Status.js.map