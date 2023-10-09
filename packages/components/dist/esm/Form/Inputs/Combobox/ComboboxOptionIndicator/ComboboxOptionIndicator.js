const _excluded = ["children", "indicator", "isActive", "isSelected", "isMulti"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { Flex } from '../../../../Layout';
import { ComboboxContext, ComboboxMultiContext, OptionContext } from '../ComboboxContext';
function isIndicatorFunction(children) {
  return typeof children === 'function';
}
export const ComboboxOptionIndicator = _ref => {
  let {
      children,
      indicator: propsIndicator,
      isActive,
      isSelected,
      isMulti
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const {
    indicatorPropRef
  } = contextToUse;
  const indicatorToUse = propsIndicator !== undefined ? propsIndicator : indicatorPropRef && indicatorPropRef.current;
  const option = useContext(OptionContext) || {
    value: ''
  };
  const {
    label,
    value
  } = option;
  const indicator = useMemo(() => {
    const indicatorProps = {
      isActive,
      isSelected,
      label,
      value
    };
    if (isValidElement(indicatorToUse)) {
      return cloneElement(indicatorToUse, indicatorProps);
    } else if (isIndicatorFunction(indicatorToUse)) {
      return indicatorToUse(indicatorProps);
    }
    return indicatorToUse;
  }, [indicatorToUse, isActive, isSelected, value, label]);
  const content = indicator === undefined ? children : indicator;
  return React.createElement(Flex, _extends({
    width: content ? 'small' : 'none',
    alignItems: "flex-start",
    flexShrink: 0,
    justifyContent: "center",
    mr: "xsmall"
  }, props), content);
};
//# sourceMappingURL=ComboboxOptionIndicator.js.map