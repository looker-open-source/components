import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "className", "disabled", "id", "onClick", "onSelect", "selected", "style"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t,
    _t2;

import pick from 'lodash/pick';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { layout, reset, padding, typography } from '@looker/design-tokens';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { useWrapEvent } from '../utils';
import { TabIndicator } from './TabIndicator';
import { TabLabel } from './TabLabel';
export const Tab2 = styled(forwardRef((props, forwardedRef) => {
  const {
    children,
    className,
    disabled,
    id,
    onClick,
    onSelect,
    selected,
    style
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  const _useBoundedRipple = useBoundedRipple({
    className,
    color: selected ? 'key' : 'neutral',
    ref: forwardedRef,
    style
  }),
        {
    callbacks
  } = _useBoundedRipple,
        rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), disabled);
  const handleClick = useWrapEvent(() => {
    if (!disabled && onSelect) {
      onSelect();
    }
  }, onClick);
  return React.createElement("button", _extends({
    "aria-controls": `panel-${id}`,
    "aria-orientation": "horizontal",
    "aria-selected": selected,
    id: `tab-${id}`,
    onClick: handleClick,
    role: "tab",
    tabIndex: -1,
    type: "button"
  }, restProps, rippleProps, rippleHandlers), React.createElement(TabLabel, null, children), React.createElement(TabIndicator, {
    selected: selected
  }));
})).attrs(({
  fontFamily: _fontFamily = 'brand',
  fontSize: _fontSize = 'small',
  fontWeight: _fontWeight = 'medium'
}) => ({
  fontFamily: _fontFamily,
  fontSize: _fontSize,
  fontWeight: _fontWeight
})).withConfig({
  displayName: "Tab2",
  componentId: "sc-qok8xr-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}

  align-items: center;
  background: transparent;
  border: none;
  color: ${0};
  cursor: pointer;
  height: ${0};
  /* this is here to remove default margin button in Safari */
  margin: 0;
  min-width: fit-content;
  position: relative;

  ${0}
`), reset, layout, padding, rippleStyle, typography, ({
  selected,
  theme
}) => selected ? theme.colors.key : theme.colors.text5, ({
  theme
}) => theme.space.u12, ({
  disabled
}) => disabled && css(_t2 || (_t2 = _`
      border-bottom-color: transparent;
      color: ${0};
      cursor: default;
    `), ({
  theme
}) => theme.colors.text1));
//# sourceMappingURL=Tab2.js.map