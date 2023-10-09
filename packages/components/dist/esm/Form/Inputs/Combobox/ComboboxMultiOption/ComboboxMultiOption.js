const _excluded = ["children", "indicator", "highlightText", "scrollIntoView"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useForkedRef } from '../../../../utils';
import { FauxCheckbox } from '../../Checkbox/FauxCheckbox';
import { CheckMark } from '../../Checkbox/CheckMark';
import { ComboboxMultiContext } from '../ComboboxContext';
import { comboboxOptionStyle, ComboboxOptionWrapper, ComboboxOptionText } from '../ComboboxOption';
import { ComboboxOptionIndicator } from '../ComboboxOptionIndicator';
import { useAddOptionToContext } from '../utils/useAddOptionToContext';
import { useOptionEvents } from '../utils/useOptionEvents';
import { useOptionStatus } from '../utils/useOptionStatus';
import { useOptionScroll } from '../utils/useOptionScroll';
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
  componentId: "sc-4bdof0-0"
})(_t || (_t = _`
  ${0}
  ${0} {
    margin-top: 1px;
  }
`), comboboxOptionStyle, FauxCheckbox);
//# sourceMappingURL=ComboboxMultiOption.js.map