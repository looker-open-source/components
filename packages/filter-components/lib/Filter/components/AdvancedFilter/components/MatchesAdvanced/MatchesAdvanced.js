import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { typeToGrammar } from '@looker/filter-expressions';
import { GroupInput } from '../GroupInput';

const getFilterItemExpression = (item, type, field) => {
  const {
    toString
  } = typeToGrammar(type);
  return toString(item, type, field);
};

export const MatchesAdvanced = ({
  item,
  item: {
    expression
  },
  onChange,
  field,
  filterType
}) => {
  const expressionChanged = event => {
    const newExpression = event.currentTarget.value;
    onChange(item.id, _objectSpread(_objectSpread({}, item), {}, {
      type: 'matchesAdvanced',
      expression: newExpression
    }));
  };

  return React.createElement(GroupInput, {
    type: "text",
    minWidth: "120px",
    value: expression !== null && expression !== void 0 ? expression : getFilterItemExpression(item, filterType, field),
    onChange: expressionChanged,
    placement: "right"
  });
};
//# sourceMappingURL=MatchesAdvanced.js.map