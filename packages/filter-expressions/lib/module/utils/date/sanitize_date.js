import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { clearTimeFilterDateTimeModel, dateToFilterDateTimeModel } from './date_conversions';
export const sanitizeDate = item => {
  const dateItem = dateToFilterDateTimeModel(new Date(Date.now()));
  const {
    id = '0',
    is = true,
    type,
    unit,
    value,
    range = 'relative',
    date = _objectSpread({}, dateItem),
    year = dateItem.year,
    month = dateItem.month,
    start = dateItem,
    end = dateItem,
    startInterval,
    endInterval,
    intervalType
  } = item;
  const interval = {
    unit: 'month',
    value: 3
  };
  switch (type) {
    case 'past':
      return {
        id,
        is,
        type,
        unit: unit || 'month',
        value: value || 1
      };
    case 'this':
    case 'next':
    case 'last':
      return {
        id,
        is,
        type,
        unit: unit || 'month'
      };
    case 'anytime':
      return {
        id,
        is,
        type
      };
    case 'year':
      return {
        id,
        is,
        type,
        year
      };
    case 'month':
      return {
        id,
        is,
        type,
        year,
        month
      };
    case 'before':
    case 'after':
      return {
        id,
        is,
        type,
        range,
        unit: unit || 'month',
        value: value || 1,
        date
      };
    case 'range':
      return {
        id,
        is,
        type,
        start,
        end
      };
    case 'thisRange':
      return {
        id,
        is,
        type,
        startInterval,
        endInterval
      };
    case 'on':
      return {
        id,
        is,
        type,
        date: clearTimeFilterDateTimeModel(date)
      };
    case 'relative':
      return {
        id,
        is,
        type,
        startInterval: startInterval || interval,
        endInterval: endInterval || interval,
        intervalType: intervalType || 'ago'
      };
    case 'null':
    case 'notnull':
      return {
        id,
        is,
        type
      };
    default:
      return _objectSpread(_objectSpread({}, item), {}, {
        type
      });
  }
};
//# sourceMappingURL=sanitize_date.js.map