import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "className", "isSelected", "label", "style", "value"],
      _excluded2 = ["callbacks"],
      _excluded3 = ["children", "indicator", "highlightText", "scrollIntoView"],
      _excluded4 = ["highlightText"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

import pick from 'lodash/pick';
import { color, flexbox, layout, reset, space, typography, omitStyledProps } from '@looker/design-tokens';
import React, { forwardRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import omit from 'lodash/omit';
import { ReplaceText, Span } from '../../../Text';
import { useForkedRef } from '../../../utils';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../../../Ripple';
import { makeHash } from './utils/makeHash';
import { OptionContext, ComboboxContext, ComboboxMultiContext } from './ComboboxContext';
import { ComboboxOptionIndicator } from './ComboboxOptionIndicator';
import { getComboboxText } from './utils/getComboboxText';
import { useOptionEvents } from './utils/useOptionEvents';
import { useOptionStatus } from './utils/useOptionStatus';
import { useAddOptionToContext } from './utils/useAddOptionToContext';
import { useOptionScroll } from './utils/useOptionScroll';
export const ComboboxOptionWrapper = styled(forwardRef((props, forwardedRef) => {
  const {
    children,
    className,
    isSelected,
    label,
    style,
    value
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const _useBoundedRipple = useBoundedRipple({
    className,
    color: isSelected ? 'key' : 'neutral',
    ref: forwardedRef,
    style
  }),
        {
    callbacks
  } = _useBoundedRipple,
        rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(rest, rippleHandlerKeys), rest.disabled);
  return React.createElement(OptionContext.Provider, {
    value: {
      label,
      value
    }
  }, React.createElement("li", _extends({}, omit(omitStyledProps(rest)), {
    id: String(makeHash(value)),
    role: "option"
  }, rippleProps, rippleHandlers, {
    tabIndex: -1
  }), children));
})).withConfig({
  displayName: "ComboboxOption__ComboboxOptionWrapper",
  componentId: "sc-w994y4-0"
})(_t || (_t = _`
  ${0}
  background-color: ${0};
  &[aria-selected='true'] {
    background-color: ${0};
  }
`), rippleStyle, ({
  isSelected,
  theme
}) => isSelected && theme.colors.keySubtle, ({
  isSelected,
  theme
}) => isSelected ? theme.colors.keyAccent : theme.colors.ui1);
const ComboboxOptionInternal = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    indicator,
    highlightText = true,
    scrollIntoView
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded3);

  const {
    label,
    value
  } = props;
  useAddOptionToContext(ComboboxContext, value, label, scrollIntoView);
  const optionEvents = useOptionEvents(props, ComboboxContext);
  const {
    isActive,
    isSelected
  } = useOptionStatus(ComboboxContext, value);
  const scrollRef = useOptionScroll(ComboboxContext, value, label, scrollIntoView, isActive);
  const ref = useForkedRef(scrollRef, forwardedRef);
  return React.createElement(ComboboxOptionWrapper, _extends({}, props, optionEvents, {
    ref: ref,
    "aria-selected": isActive,
    isSelected: isSelected
  }), React.createElement(ComboboxOptionIndicator, {
    indicator: indicator,
    isActive: isActive,
    isSelected: isSelected
  }), children || React.createElement(ComboboxOptionText, {
    highlightText: highlightText
  }));
});
ComboboxOptionInternal.displayName = 'ComboboxOptionInternal';
export const comboboxOptionStyle = css(_t2 || (_t2 = _`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  align-items: stretch;
  cursor: default;
  outline: none;
`), reset, color, flexbox, layout, space, typography);
export const ComboboxOption = styled(ComboboxOptionInternal).attrs(({
  color: _color = 'text4',
  display: _display = 'flex',
  fontSize: _fontSize = 'small',
  lineHeight: _lineHeight = 'small',
  px: _px = 'xsmall',
  py: _py = 'xxsmall'
}) => ({
  color: _color,
  display: _display,
  fontSize: _fontSize,
  lineHeight: _lineHeight,
  px: _px,
  py: _py
})).withConfig({
  displayName: "ComboboxOption",
  componentId: "sc-w994y4-1"
})(_t3 || (_t3 = _`
  ${0}
`), comboboxOptionStyle);
export function ComboboxOptionTextInternal(_ref2) {
  let {
    highlightText = true
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded4);

  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = context.transition ? context : contextMulti;
  const {
    data
  } = contextToUse;
  const {
    inputValue
  } = data;
  const contextOption = data.option;
  const option = useContext(OptionContext);
  const text = getComboboxText(option);

  if (!highlightText || !inputValue || inputValue === '' || inputValue === getComboboxText(contextOption)) {
    return React.createElement("span", props, text);
  }

  return React.createElement("span", props, React.createElement(ReplaceText, {
    match: inputValue,
    replace: (str, index) => React.createElement(Span, {
      fontWeight: "semiBold",
      fontSize: "small",
      textDecoration: "underline",
      key: index
    }, str)
  }, text));
}
export const ComboboxOptionText = styled(ComboboxOptionTextInternal).withConfig({
  displayName: "ComboboxOption__ComboboxOptionText",
  componentId: "sc-w994y4-2"
})(_t4 || (_t4 = _`
  max-width: 100%;
  word-wrap: break-word;
`));
//# sourceMappingURL=ComboboxOption.js.map