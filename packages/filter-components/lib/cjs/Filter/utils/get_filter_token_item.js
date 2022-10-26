"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilterTokenItem = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _filterExpressions = require("@looker/filter-expressions");

var _utils = require("../components/AdvancedFilter/components/DateFilter/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getFilterTokenItem = function getFilterTokenItem(root, filterType, configType) {
  var item = _objectSpread({}, root);

  switch (filterType) {
    case 'number':
      item = getNumberFilterTokenItem(item, configType);
      break;

    case 'string':
      item = (0, _filterExpressions.sanitizeString)(_objectSpread(_objectSpread({}, item), {}, {
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

exports.getFilterTokenItem = getFilterTokenItem;

var getNumberFilterTokenItem = function getNumberFilterTokenItem(item, configType) {
  var _item$value;

  var value = [0];

  if ((_item$value = item.value) !== null && _item$value !== void 0 && _item$value.length) {
    value = item.value;
  } else if (item.low) {
    value = [item.low];
  }

  switch (configType) {
    case 'range_slider':
      {
        var _item$value2, _item$low, _item$high;

        var _value = item.value && ((_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2[0]) || 0;

        return (0, _filterExpressions.sanitizeNumber)(_objectSpread(_objectSpread({}, item), {}, {
          type: 'between',
          low: (_item$low = item.low) !== null && _item$low !== void 0 ? _item$low : _value,
          high: (_item$high = item.high) !== null && _item$high !== void 0 ? _item$high : _value
        }));
      }

    case 'slider':
      return (0, _filterExpressions.sanitizeNumber)(_objectSpread(_objectSpread({}, item), {}, {
        type: '=',
        value: value
      }));

    default:
      return (0, _filterExpressions.sanitizeNumber)(_objectSpread(_objectSpread({}, item), {}, {
        type: '='
      }));
  }
};

var getRelativeTimeframesTokenItem = function getRelativeTimeframesTokenItem(item) {
  if (item.type === 'on') {
    var dateItem = item.date || (0, _filterExpressions.dateToFilterDateTimeModel)(new Date(Date.now()));
    var _item$start = item.start,
        start = _item$start === void 0 ? dateItem : _item$start,
        _item$end = item.end,
        end = _item$end === void 0 ? (0, _filterExpressions.dateToFilterDateTimeModel)((0, _filterExpressions.addDays)(new Date(Date.now()), 1)) : _item$end;
    return (0, _filterExpressions.sanitizeDate)(_objectSpread(_objectSpread({}, item), {}, {
      type: 'range',
      start: start,
      end: end
    }));
  }

  if (!(0, _utils.filterModelToRelativeTimeframeModel)(item)) {
    return (0, _filterExpressions.sanitizeDate)(_objectSpread(_objectSpread({}, item), {}, {
      type: 'past',
      unit: 'day',
      value: 7
    }));
  }

  return (0, _filterExpressions.sanitizeDate)(item);
};

var getDateFilterTokenItem = function getDateFilterTokenItem(item, configType) {
  switch (configType) {
    case 'day_picker':
      return (0, _filterExpressions.sanitizeDate)(_objectSpread(_objectSpread({}, item), {}, {
        type: 'on'
      }));

    case 'day_range_picker':
      {
        var dateItem = item.date || (0, _filterExpressions.dateToFilterDateTimeModel)(new Date(Date.now()));
        var _item$start2 = item.start,
            start = _item$start2 === void 0 ? dateItem : _item$start2,
            _item$end2 = item.end,
            end = _item$end2 === void 0 ? (0, _filterExpressions.dateToFilterDateTimeModel)((0, _filterExpressions.addDays)(new Date(Date.now()), 1)) : _item$end2;
        return (0, _filterExpressions.sanitizeDate)(_objectSpread(_objectSpread({}, item), {}, {
          type: 'range',
          start: start,
          end: end
        }));
      }

    case 'relative_timeframes':
      return getRelativeTimeframesTokenItem(item);

    default:
      return (0, _filterExpressions.sanitizeDate)(item);
  }
};
//# sourceMappingURL=get_filter_token_item.js.map