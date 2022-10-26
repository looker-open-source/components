import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "indicator", "isActive", "isSelected", "isMulti"];
import React, { cloneElement, isValidElement, useContext, useMemo } from 'react';
import { Flex } from '../../../Layout';
import { ComboboxContext, ComboboxMultiContext, OptionContext } from './ComboboxContext';

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