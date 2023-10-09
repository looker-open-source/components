const _excluded = ["className", "date", "isTodaysMonth", "locale", "monthNumber", "onMonthClick", "selected", "selectedMonth", "style"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useCallback } from 'react';
import styled from 'styled-components';
import pick from 'lodash/pick';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { isThisMonth } from './utils/dateConfirmations';
export const MonthPicker = styled(_ref => {
  var _locale$localize;
  let {
      className,
      date = new Date(),
      isTodaysMonth,
      locale,
      monthNumber,
      onMonthClick,
      selected,
      selectedMonth,
      style
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const _useBoundedRipple = useBoundedRipple({
      className,
      color: 'neutral',
      style
    }),
    {
      callbacks
    } = _useBoundedRipple,
    rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);
  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), restProps.disabled);
  const isMonth = selectedMonth && isThisMonth(selectedMonth, monthNumber, date);
  isTodaysMonth = isTodaysMonth && isThisMonth(new Date(), monthNumber, date);
  return React.createElement("button", _extends({
    "aria-current": isTodaysMonth,
    "aria-selected": isMonth,
    type: "button",
    onClick: useCallback(() => onMonthClick(monthNumber), [monthNumber, onMonthClick])
  }, restProps, rippleProps, rippleHandlers), (_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.month(monthNumber, {
    width: 'abbreviated'
  }));
}).withConfig({
  displayName: "MonthPicker",
  componentId: "sc-mrnrtl-0"
})(_t || (_t = _`
  ${0}
  background: transparent;
  border: 1px solid ${0};
  border-radius: ${0};
  color: ${0};
  font-size: ${0};
  font-weight: ${0};
  height: ${0};
  width: ${0};
  &[aria-current='true'] {
    border: 1px solid ${0};
    color: ${0};
  }
  &[aria-selected='true'] {
    background: ${0};
    color: ${0};
  }
`), rippleStyle, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.space.u5, ({
  theme
}) => theme.colors.text3, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.fontWeights.medium, ({
  theme
}) => theme.space.u7, ({
  theme
}) => theme.space.u12, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.keyText);
//# sourceMappingURL=MonthPicker.js.map