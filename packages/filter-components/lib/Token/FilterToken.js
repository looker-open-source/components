import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config", "maxWidth", "onClick", "userAttributes"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef } from 'react';
import { Popover, PopoverContent } from '@looker/components';
import { getExpressionType, getUserAttributeMatchingTypeAndExpression } from '@looker/filter-expressions';
import { ERROR_TYPE } from '../constants';
import { Filter } from '../Filter/Filter';
import { FilterErrorMessage, useFiltersErrors } from '../FilterErrorMessage';
import { Token } from './Token';
import { getLabel } from './utils/get_label';
export const FilterToken = forwardRef((_ref, ref) => {
  let {
    config,
    maxWidth,
    onClick,
    userAttributes
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const expressionType = props.expressionType || getExpressionType({
    type: props.type,
    field: props.field || undefined
  });
  const label = getLabel(_objectSpread(_objectSpread({}, props), {}, {
    type: expressionType,
    userAttributes
  }));
  const hasError = useFiltersErrors([props], {
    userAttributes
  }).type === ERROR_TYPE;
  const userAttribute = getUserAttributeMatchingTypeAndExpression(expressionType, props.expression, userAttributes);
  const isSubdued = props.expression === '' || props.expression === undefined || !!userAttribute && !userAttribute.value;
  const content = React.createElement(Filter, _extends({
    expressionType: expressionType,
    config: config,
    inline: (config === null || config === void 0 ? void 0 : config.display) === 'inline',
    userAttributes: userAttributes
  }, props));

  if ((config === null || config === void 0 ? void 0 : config.display) === 'inline') {
    return content;
  }

  const popoverContent = React.createElement(PopoverContent, {
    maxWidth: "90vw",
    py: "large"
  }, content, React.createElement(FilterErrorMessage, {
    filters: [props],
    userAttributes: userAttributes,
    useLongMessageForm: true
  }));
  return React.createElement(Popover, {
    content: popoverContent,
    placement: "bottom-start",
    ref: ref
  }, React.createElement(Token, {
    label: label,
    subdued: isSubdued,
    hasError: hasError,
    maxWidth: maxWidth,
    onClick: onClick
  }));
});
//# sourceMappingURL=FilterToken.js.map