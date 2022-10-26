import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "date", "isTodaysMonth", "locale", "monthNumber", "onMonthClick", "selected", "selectedMonth", "style"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t;

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