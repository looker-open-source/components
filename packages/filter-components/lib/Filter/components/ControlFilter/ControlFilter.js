import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["ast", "expressionType", "validationMessage", "dispatchConfigTypeChange"],
      _excluded2 = ["onInputChange"];
import React, { useEffect } from 'react';
import { getControlFilterInfo, calculateSuggestOptions } from '../../utils';
import { getFilterTokenItem } from '../../utils/get_filter_token_item';
export const ControlFilter = _ref => {
  let {
    ast,
    expressionType,
    validationMessage,
    dispatchConfigTypeChange = false
  } = _ref,
      adapterProps = _objectWithoutProperties(_ref, _excluded);

  const {
    config,
    field
  } = adapterProps;
  const {
    Component,
    props: filterTokenProps
  } = getControlFilterInfo(getFilterTokenItem(ast, expressionType, config.type), adapterProps);
  useEffect(() => {
    if (dispatchConfigTypeChange) {
      if (filterTokenProps !== null && filterTokenProps !== void 0 && filterTokenProps.date) {
        filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.onChange(filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.date);
      } else {
        filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.onChange(filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.value);
      }
    }
  }, [config.type]);

  if (!filterTokenProps || !Component) {
    return null;
  }

  const {
    onInputChange: filterTokenInputChange
  } = filterTokenProps,
        restProps = _objectWithoutProperties(filterTokenProps, _excluded2);

  const toggleOptions = calculateSuggestOptions(filterTokenProps);
  return React.createElement(Component, _extends({
    onInputChange: filterTokenInputChange,
    inline: config.display === 'inline',
    validationMessage: validationMessage,
    anyOption: !((field === null || field === void 0 ? void 0 : field.category) === 'parameter')
  }, restProps, {
    options: toggleOptions
  }));
};
//# sourceMappingURL=ControlFilter.js.map