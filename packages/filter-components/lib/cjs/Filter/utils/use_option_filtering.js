"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptionFiltering = exports.useDebouncedFilterTerm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _useDebounce3 = require("use-debounce");

var _react = require("react");

var _utils = require("../../utils");

var _option_utils = require("./option_utils");

var _excluded = ["debouncedFilterTerm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useExtendedOptions = function useExtendedOptions(options, values, filterTerm, limit, excludeValues) {
  return (0, _react.useMemo)(function () {
    var needToAppendValues = !excludeValues && filterTerm === '' && values.length > 0 && options.length >= limit;

    var valueInOptions = function valueInOptions(value) {
      return options.find(function (option) {
        return option.value === value;
      });
    };

    var reducer = function reducer(acc, value) {
      if (!valueInOptions(value)) {
        acc.push(value);
      }

      return acc;
    };

    var valuesToAppend = needToAppendValues ? values.reduce(reducer, []) : [];
    return [].concat((0, _toConsumableArray2["default"])(options), (0, _toConsumableArray2["default"])((0, _option_utils.createOptions)(valuesToAppend)));
  }, [options, values, filterTerm, limit, excludeValues]);
};

var useDebouncedFilterTerm = function useDebouncedFilterTerm(onInputChange) {
  var _useTranslation = (0, _utils.useTranslation)('use_option_filtering'),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filterTerm = _useState2[0],
      setFilterTerm = _useState2[1];

  var _useDebounce = (0, _useDebounce3.useDebounce)(filterTerm, 150, {
    leading: true
  }),
      _useDebounce2 = (0, _slicedToArray2["default"])(_useDebounce, 1),
      debouncedFilterTerm = _useDebounce2[0];

  var isFirstRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (!isFirstRender.current) {
      onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(debouncedFilterTerm.trim());
    }

    isFirstRender.current = false;
  }, [debouncedFilterTerm]);
  var noOptionsLabel = filterTerm === '' ? t('No values') : "".concat(t('No values match'), " \"").concat(debouncedFilterTerm, "\"");
  return {
    debouncedFilterTerm: debouncedFilterTerm,
    noOptionsLabel: noOptionsLabel,
    onFilter: setFilterTerm
  };
};

exports.useDebouncedFilterTerm = useDebouncedFilterTerm;

var useOptionFiltering = function useOptionFiltering(_ref) {
  var excludeValues = _ref.excludeValues,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 999 : _ref$limit,
      onInputChange = _ref.onInputChange,
      options = _ref.options,
      value = _ref.value;
  var values;

  if (typeof value === 'string') {
    if (value === '') {
      values = [];
    } else {
      values = [value];
    }
  } else {
    values = value;
  }

  var _useDebouncedFilterTe = useDebouncedFilterTerm(onInputChange),
      debouncedFilterTerm = _useDebouncedFilterTe.debouncedFilterTerm,
      rest = (0, _objectWithoutProperties2["default"])(_useDebouncedFilterTe, _excluded);

  var extendedOptions = useExtendedOptions(options, values, debouncedFilterTerm, limit, excludeValues);
  var filteredOptions = (0, _react.useMemo)(function () {
    return (0, _option_utils.filterOptions)(extendedOptions, debouncedFilterTerm, excludeValues ? values : []);
  }, [extendedOptions, debouncedFilterTerm, values]);
  return _objectSpread({
    filteredOptions: filteredOptions,
    debouncedFilterTerm: debouncedFilterTerm
  }, rest);
};

exports.useOptionFiltering = useOptionFiltering;
//# sourceMappingURL=use_option_filtering.js.map