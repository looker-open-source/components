let _ = t => t,
  _t;
const _excluded = ["className", "title", "intent"],
  _excluded2 = ["size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import { Error } from '@styled-icons/material/Error';
import { Info } from '@styled-icons/material/Info';
import { Warning } from '@styled-icons/material/Warning';
import { color, size } from '@looker/design-tokens';
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
  const {
      size: _size
    } = props,
    rest = _objectWithoutProperties(props, _excluded2);
  return React.createElement(Component, _extends({}, rest, {
    className: className,
    ref: ref,
    title: !props['aria-describedby'] ? title || getIntentLabel(t, intent) : undefined
  }));
});
StatusLayout.displayName = 'StatusLayout';
export const Status = styled(StatusLayout).attrs(({
  intent: _intent = defaultIntent,
  size: _size2 = 'medium'
}) => ({
  color: _intent,
  size: _size2
})).withConfig({
  displayName: "Status",
  componentId: "sc-hjs0z2-0"
})(_t || (_t = _`
  ${0}
  ${0}
  flex-shrink: 0;
`), color, size);
//# sourceMappingURL=Status.js.map