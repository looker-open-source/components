import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Box2, InputDateRange } from '@looker/components';
import React from 'react';
import { FILTERS_DATE_FORMAT } from '../../../../utils/format_date';
const defaultValue = {
  from: new Date(Date.now()),
  to: new Date(Date.now())
};
export const RelativeTimeframeCustom = ({
  value,
  onCustomChange
}) => {
  const range = typeof value === 'string' ? defaultValue : value;

  const handleCustomChange = (d = {}) => {
    const newDateRange = _objectSpread({
      from: new Date(Date.now()),
      to: new Date(Date.now())
    }, d);

    onCustomChange(newDateRange);
  };

  return React.createElement(Box2, {
    p: "u3"
  }, React.createElement(InputDateRange, {
    dateStringFormat: FILTERS_DATE_FORMAT,
    value: range,
    onChange: handleCustomChange
  }));
};
//# sourceMappingURL=RelativeTimeframeCustom.js.map