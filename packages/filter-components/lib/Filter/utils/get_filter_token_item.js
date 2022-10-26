import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { sanitizeString, sanitizeNumber, sanitizeDate, dateToFilterDateTimeModel, addDays } from '@looker/filter-expressions';
import { filterModelToRelativeTimeframeModel } from '../components/AdvancedFilter/components/DateFilter/utils';
export const getFilterTokenItem = (root, filterType, configType) => {
  let item = _objectSpread({}, root);

  switch (filterType) {
    case 'number':
      item = getNumberFilterTokenItem(item, configType);
      break;

    case 'string':
      item = sanitizeString(_objectSpread(_objectSpread({}, item), {}, {
        type: 'match'
      }));
      break;

    case 'date':
      item = getDateFilterTokenItem(item, configType);
      break;
  }

  return _objectSpread(_objectSpread({}, item), {}, {
    is: true,
    left: null,
    right: null
  });
};

const getNumberFilterTokenItem = (item, configType) => {
  var _item$value;

  let value = [0];

  if ((_item$value = item.value) !== null && _item$value !== void 0 && _item$value.length) {
    value = item.value;
  } else if (item.low) {
    value = [item.low];
  }

  switch (configType) {
    case 'range_slider':
      {
        var _item$value2, _item$low, _item$high;

        const _value = item.value && ((_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2[0]) || 0;

        return sanitizeNumber(_objectSpread(_objectSpread({}, item), {}, {
          type: 'between',
          low: (_item$low = item.low) !== null && _item$low !== void 0 ? _item$low : _value,
          high: (_item$high = item.high) !== null && _item$high !== void 0 ? _item$high : _value
        }));
      }

    case 'slider':
      return sanitizeNumber(_objectSpread(_objectSpread({}, item), {}, {
        type: '=',
        value
      }));

    default:
      return sanitizeNumber(_objectSpread(_objectSpread({}, item), {}, {
        type: '='
      }));
  }
};

const getRelativeTimeframesTokenItem = item => {
  if (item.type === 'on') {
    const dateItem = item.date || dateToFilterDateTimeModel(new Date(Date.now()));
    const {
      start = dateItem,
      end = dateToFilterDateTimeModel(addDays(new Date(Date.now()), 1))
    } = item;
    return sanitizeDate(_objectSpread(_objectSpread({}, item), {}, {
      type: 'range',
      start,
      end
    }));
  }

  if (!filterModelToRelativeTimeframeModel(item)) {
    return sanitizeDate(_objectSpread(_objectSpread({}, item), {}, {
      type: 'past',
      unit: 'day',
      value: 7
    }));
  }

  return sanitizeDate(item);
};

const getDateFilterTokenItem = (item, configType) => {
  switch (configType) {
    case 'day_picker':
      return sanitizeDate(_objectSpread(_objectSpread({}, item), {}, {
        type: 'on'
      }));

    case 'day_range_picker':
      {
        const dateItem = item.date || dateToFilterDateTimeModel(new Date(Date.now()));
        const {
          start = dateItem,
          end = dateToFilterDateTimeModel(addDays(new Date(Date.now()), 1))
        } = item;
        return sanitizeDate(_objectSpread(_objectSpread({}, item), {}, {
          type: 'range',
          start,
          end
        }));
      }

    case 'relative_timeframes':
      return getRelativeTimeframesTokenItem(item);

    default:
      return sanitizeDate(item);
  }
};
//# sourceMappingURL=get_filter_token_item.js.map