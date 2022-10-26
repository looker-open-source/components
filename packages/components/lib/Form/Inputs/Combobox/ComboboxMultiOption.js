import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "indicator", "highlightText", "scrollIntoView"];

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useForkedRef } from '../../../utils';
import { FauxCheckbox } from '../Checkbox/FauxCheckbox';
import { CheckMark } from '../Checkbox/CheckMark';
import { ComboboxMultiContext } from './ComboboxContext';
import { comboboxOptionStyle, ComboboxOptionWrapper, ComboboxOptionText } from './ComboboxOption';
import { ComboboxOptionIndicator } from './ComboboxOptionIndicator';
import { useAddOptionToContext } from './utils/useAddOptionToContext';
import { useOptionEvents } from './utils/useOptionEvents';
import { useOptionStatus } from './utils/useOptionStatus';
import { useOptionScroll } from './utils/useOptionScroll';
export const ComboboxMultiOption = styled(forwardRef((_ref, forwardedRef) => {
  let {
    children,
    indicator,
    highlightText = true,
    scrollIntoView
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    label,
    value
  } = props;
  useAddOptionToContext(ComboboxMultiContext, value, label, scrollIntoView);
  const optionEvents = useOptionEvents(props, ComboboxMultiContext);
  const {
    isActive,
    isSelected
  } = useOptionStatus(ComboboxMultiContext, value);
  const scrollRef = useOptionScroll(ComboboxMultiContext, value, label, scrollIntoView, isActive);
  const ref = useForkedRef(scrollRef, forwardedRef);
  return React.createElement(ComboboxOptionWrapper, _extends({}, props, optionEvents, {
    ref: ref,
    "aria-selected": isActive,
    isSelected: isSelected
  }), React.createElement(ComboboxOptionIndicator, {
    indicator: indicator,
    isActive: isActive,
    isSelected: isSelected,
    isMulti: true
  }, React.createElement(FauxCheckbox, {
    isSelected: isSelected
  }, React.createElement(CheckMark, null))), children || React.createElement(ComboboxOptionText, {
    highlightText: highlightText
  }));
})).attrs(({
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
  displayName: "ComboboxMultiOption",
  componentId: "sc-t8w536-0"
})(_t || (_t = _`
  ${0}
  ${0} {
    margin-top: 1px;
  }
`), comboboxOptionStyle, FauxCheckbox);
//# sourceMappingURL=ComboboxMultiOption.js.map