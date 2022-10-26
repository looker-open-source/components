import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filter", "sdk"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext, useEffect } from 'react';
import { Field, Status, Tooltip } from '@looker/components';
import { Filter } from '../Filter/Filter';
import { useValidationMessage } from '../Filter/utils';
import { useSuggestable } from './use_suggestable';
import { useExpressionState } from './use_expression_state';
import { FilterContext } from '../FilterCollection';
export const DashboardFilter = _ref => {
  let {
    filter,
    sdk
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    id,
    name,
    type,
    field,
    required,
    ui_config,
    allow_multiple_values
  } = filter;
  const {
    removeFilter
  } = useContext(FilterContext);
  useEffect(() => {
    return () => {
      removeFilter(filter);
    };
  }, [removeFilter, filter]);
  const stateProps = useExpressionState(_objectSpread({
    filter
  }, rest));
  const {
    errorMessage,
    suggestableProps
  } = useSuggestable({
    filter,
    sdk
  });
  const validationMessage = useValidationMessage(stateProps.expression, required);
  return React.createElement(Field, {
    id: id || '',
    label: name || '',
    detail: errorMessage && React.createElement(Tooltip, {
      content: errorMessage
    }, React.createElement(Status, {
      intent: "critical",
      "data-testid": "error-icon"
    })),
    validationMessage: validationMessage
  }, React.createElement(Filter, _extends({
    name: name || '',
    type: type || '',
    field: field,
    config: ui_config,
    isRequired: required
  }, suggestableProps, stateProps, {
    allowMultipleValues: !!allow_multiple_values
  })));
};
//# sourceMappingURL=DashboardFilter.js.map