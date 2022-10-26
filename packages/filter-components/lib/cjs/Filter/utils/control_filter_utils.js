"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxForFilterType = exports.getControlFilterInfo = exports.TEST_ONLY = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _filterExpressions = require("@looker/filter-expressions");

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _partition = _interopRequireDefault(require("lodash/partition"));

var _ButtonToggles = require("../components/ControlFilter/components/ButtonToggles");

var _ButtonGroup = require("../components/ControlFilter/components/ButtonGroup");

var _CheckboxGroup = require("../components/ControlFilter/components/CheckboxGroup");

var _DateInput = require("../components/AdvancedFilter/components/DateFilter/components/DateInput");

var _DateRange = require("../components/AdvancedFilter/components/DateFilter/components/DateRange");

var _DayRangeInput = require("../components/AdvancedFilter/components/DateFilter/components/DayRangeInput");

var _RelativeTimeframes = require("../components/AdvancedFilter/components/DateFilter/components/RelativeTimeframes");

var _relative_timeframe_conversions = require("../components/AdvancedFilter/components/DateFilter/utils/relative_timeframe_conversions");

var _DropdownMenu = require("../components/ControlFilter/components/DropdownMenu");

var _RadioGroup = require("../components/ControlFilter/components/RadioGroup");

var _Slider = require("../components/ControlFilter/components/Slider");

var _TagList = require("../components/ControlFilter/components/TagList");

var _option_utils = require("./option_utils");

var _excluded = ["isLoading"],
    _excluded2 = ["isLoading"],
    _excluded3 = ["isLoading"],
    _excluded4 = ["isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var filterMaxMap = {
  button_group: 30,
  button_toggles: 30,
  checkboxes: 50,
  radio_buttons: 50
};

var maxForFilterType = function maxForFilterType(type) {
  return filterMaxMap[type];
};

exports.maxForFilterType = maxForFilterType;

var getStringOptions = function getStringOptions(_ref) {
  var field = _ref.field,
      suggestions = _ref.suggestions,
      enumerations = _ref.enumerations,
      config = _ref.config;
  var options = config === null || config === void 0 ? void 0 : config.options;
  var escapeEnumerationVaues = (field === null || field === void 0 ? void 0 : field.has_allowed_values) && (field === null || field === void 0 ? void 0 : field.parameter);
  var stringOptions = [];
  var noOptions = !((0, _isArray["default"])(options) && options.length > 0);

  if (noOptions && suggestions && suggestions.length !== 0) {
    stringOptions = (0, _option_utils.createOptions)(suggestions);
  } else if (noOptions && enumerations) {
    stringOptions = enumerations.map((0, _option_utils.createEnumeration)(escapeEnumerationVaues));
  } else if ((0, _isArray["default"])(options)) {
    if (enumerations && enumerations.length > 0) {
      stringOptions = enumerations.map((0, _option_utils.createEnumeration)(escapeEnumerationVaues)).filter(function (_ref2) {
        var value = _ref2.value;
        return options.includes(value);
      });
    } else {
      stringOptions = (0, _option_utils.createOptions)(options);
    }
  }

  return stringOptions;
};

var getPartitionedOptions = function getPartitionedOptions(item, optionsMap) {
  var valueGroups = (0, _isArray["default"])(item.value) ? (0, _partition["default"])(item.value.map(String), function (value) {
    return optionsMap[value];
  }) : [[], []];
  return valueGroups;
};

var getMultiStringSelectChange = function getMultiStringSelectChange(item, changeFilter) {
  return function (value) {
    return changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      value: value
    }));
  };
};

var buttonGroupAdapter = function buttonGroupAdapter(item, _ref3) {
  var isLoading = _ref3.isLoading,
      props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
  var stringOptions = getStringOptions(props);
  var optionsMap = (0, _keyBy["default"])(stringOptions, 'value');

  var _getPartitionedOption = getPartitionedOptions(item, optionsMap),
      _getPartitionedOption2 = (0, _slicedToArray2["default"])(_getPartitionedOption, 2),
      included = _getPartitionedOption2[0],
      excluded = _getPartitionedOption2[1];

  var value = included.length ? included : excluded;
  var changeFilter = props.changeFilter;
  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    value: value,
    options: stringOptions,
    max: maxForFilterType('button_group'),
    isLoading: isLoading
  };
};

var checkboxGroupAdapter = function checkboxGroupAdapter(item, _ref4) {
  var isLoading = _ref4.isLoading,
      props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded2);
  var adapterProps = buttonGroupAdapter(item, props);
  var onChange = adapterProps.onChange,
      value = adapterProps.value,
      options = adapterProps.options;
  return {
    onChange: onChange,
    value: value,
    options: options,
    max: maxForFilterType('checkboxes'),
    isLoading: isLoading
  };
};

var getSingleValue = function getSingleValue(item, stringOptions, onlyValuesFromOptions, fieldCategory) {
  var optionsMap = (0, _keyBy["default"])(stringOptions, 'value');
  var singleValue;

  if (onlyValuesFromOptions) {
    var _item$value;

    singleValue = String((_item$value = item.value) !== null && _item$value !== void 0 && _item$value.length && optionsMap[item.value[0]] ? item.value[0] : '');
  } else {
    var _item$value2;

    singleValue = (_item$value2 = item.value) !== null && _item$value2 !== void 0 && _item$value2.length ? String(item.value[0]) : '';
  }

  if (fieldCategory === 'parameter' && singleValue === '' && stringOptions && stringOptions.length) {
    singleValue = stringOptions[0].value;
  }

  return singleValue;
};

var getSingleStringSelectChange = function getSingleStringSelectChange(item, changeFilter) {
  return function (value) {
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      value: [value]
    }));
  };
};

var buttonTogglesAdapter = function buttonTogglesAdapter(item, _ref5) {
  var isLoading = _ref5.isLoading,
      props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded3);
  var changeFilter = props.changeFilter,
      field = props.field;
  var stringOptions = getStringOptions(props);
  var value = getSingleValue(item, stringOptions, true, field === null || field === void 0 ? void 0 : field.category);
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value: value,
    options: stringOptions,
    isLoading: isLoading
  };
};

var relativeTimeframesAdapter = function relativeTimeframesAdapter(item, props) {
  if (item.type === 'range' && (item.start == null || item.end == null)) {
    return undefined;
  }

  var changeFilter = props.changeFilter;
  var relativeTimeframeValue = (0, _relative_timeframe_conversions.filterModelToRelativeTimeframeModel)(item);

  if (relativeTimeframeValue === undefined) {
    return undefined;
  }

  var relativeTimeframeOnChange = function relativeTimeframeOnChange(relativeTimeframe) {
    var newItem = (0, _relative_timeframe_conversions.relativeTimeframeModelToFilterModel)(relativeTimeframe);
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), newItem));
  };

  return {
    onChange: relativeTimeframeOnChange,
    value: relativeTimeframeValue
  };
};

var dateInputAdapter = function dateInputAdapter(item, props) {
  if (item.date == null) {
    return undefined;
  }

  var changeFilter = props.changeFilter;
  var dateValue = (0, _filterExpressions.filterDateTimeModelToDate)(item.date);

  var dateChange = function dateChange(date) {
    var dateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(date);
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      type: 'on',
      date: dateModel
    }));
  };

  return {
    onChange: dateChange,
    date: dateValue
  };
};

var dayRangeInputAdapter = function dayRangeInputAdapter(item, props) {
  if (item.start == null || item.end == null) {
    return undefined;
  }

  var changeFilter = props.changeFilter;
  var dateRangeValue = {
    from: (0, _filterExpressions.filterDateTimeModelToDate)(item.start),
    to: (0, _filterExpressions.addDays)((0, _filterExpressions.filterDateTimeModelToDate)(item.end), -1)
  };

  var dateRangeChange = function dateRangeChange(_ref6) {
    var from = _ref6.from,
        to = _ref6.to;
    var startDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(from);
    var translatedTo = (0, _filterExpressions.addDays)(to, 1);
    var endDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(translatedTo);
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      start: startDateModel,
      end: endDateModel,
      type: 'range'
    }));
  };

  return {
    onChange: dateRangeChange,
    value: dateRangeValue
  };
};

var dateRangeAdapter = function dateRangeAdapter(item, props) {
  if (item.start == null || item.end == null) {
    return undefined;
  }

  var dateTimeRangeValue = _objectSpread(_objectSpread({}, item), {}, {
    id: item.id || '',
    start: item.start,
    end: item.end
  });

  var changeFilter = props.changeFilter;

  var dateTimeRangeChange = function dateTimeRangeChange(id, item) {
    var from = item.from,
        to = item.to;
    var startDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(from);
    var translatedTo = (0, _filterExpressions.addDays)(to, 1);
    var endDateModel = (0, _filterExpressions.dateToFilterDateTimeModel)(translatedTo);
    changeFilter(Number(id), _objectSpread(_objectSpread({}, item), {}, {
      start: startDateModel,
      end: endDateModel,
      type: 'range'
    }));
  };

  return {
    onChange: dateTimeRangeChange,
    item: dateTimeRangeValue,
    showTime: true
  };
};

var sliderAdapter = function sliderAdapter(item, props) {
  var _item$value3;

  if (((_item$value3 = item.value) === null || _item$value3 === void 0 ? void 0 : _item$value3.length) !== 1) {
    return undefined;
  }

  var changeFilter = props.changeFilter,
      config = props.config;
  var sliderValue = item.value[0];

  var sliderChange = function sliderChange(value) {
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      type: '=',
      value: [value]
    }));
  };

  return {
    onChange: sliderChange,
    value: sliderValue,
    options: config === null || config === void 0 ? void 0 : config.options
  };
};

var rangeSliderAdapter = function rangeSliderAdapter(item, props) {
  if (item.low == null || item.high == null) {
    return undefined;
  }

  var changeFilter = props.changeFilter,
      config = props.config;
  var rangeSliderValue = {
    min: item.low,
    max: item.high
  };

  var rangeSliderChange = function rangeSliderChange(range) {
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
      bounds: '[]',
      low: range.min,
      high: range.max,
      type: 'between'
    }));
  };

  return {
    value: rangeSliderValue,
    options: config === null || config === void 0 ? void 0 : config.options,
    onChange: rangeSliderChange,
    name: props.name
  };
};

var dropdownMenuAdapter = function dropdownMenuAdapter(item, props) {
  var changeFilter = props.changeFilter,
      config = props.config,
      field = props.field,
      isLoading = props.isLoading,
      onInputChange = props.onInputChange;
  var stringOptions = getStringOptions(props);
  var value = getSingleValue(item, stringOptions, false, field === null || field === void 0 ? void 0 : field.category);
  var tokenStyle = (config === null || config === void 0 ? void 0 : config.display) !== 'popover';
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    isLoading: isLoading,
    onInputChange: onInputChange,
    value: value,
    options: stringOptions,
    max: maxForFilterType('dropdown_menu'),
    tokenStyle: tokenStyle
  };
};

var tagListAdapter = function tagListAdapter(item, props) {
  var changeFilter = props.changeFilter,
      config = props.config,
      isLoading = props.isLoading,
      onInputChange = props.onInputChange;
  var stringOptions = getStringOptions(props);
  var optionsMap = (0, _keyBy["default"])(stringOptions, 'value');

  var _getPartitionedOption3 = getPartitionedOptions(item, optionsMap),
      _getPartitionedOption4 = (0, _slicedToArray2["default"])(_getPartitionedOption3, 2),
      included = _getPartitionedOption4[0],
      excluded = _getPartitionedOption4[1];

  var values = [].concat((0, _toConsumableArray2["default"])(included), (0, _toConsumableArray2["default"])(excluded));
  var tokenStyle = (config === null || config === void 0 ? void 0 : config.display) !== 'popover';
  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    onInputChange: onInputChange,
    value: values,
    options: stringOptions,
    max: maxForFilterType('tag_list'),
    isLoading: isLoading,
    tokenStyle: tokenStyle
  };
};

var radioGroupAdapter = function radioGroupAdapter(item, _ref7) {
  var isLoading = _ref7.isLoading,
      props = (0, _objectWithoutProperties2["default"])(_ref7, _excluded4);
  var changeFilter = props.changeFilter,
      field = props.field;
  var stringOptions = getStringOptions(props);
  var value = getSingleValue(item, stringOptions, true, field === null || field === void 0 ? void 0 : field.category);
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value: value,
    options: stringOptions,
    max: maxForFilterType('radio_buttons'),
    isLoading: isLoading
  };
};

var getControlFilterInfo = function getControlFilterInfo(item, adapterProps) {
  var _ref8 = filterTokenAdapterMap[adapterProps.config.type] || {
    Component: undefined,
    adapter: undefined
  },
      Component = _ref8.Component,
      adapter = _ref8.adapter;

  var props = adapter === null || adapter === void 0 ? void 0 : adapter(item, adapterProps);
  return {
    Component: Component,
    props: props
  };
};

exports.getControlFilterInfo = getControlFilterInfo;
var filterTokenAdapterMap = {
  button_group: {
    Component: _ButtonGroup.ButtonGroup,
    adapter: buttonGroupAdapter
  },
  button_toggles: {
    Component: _ButtonToggles.ButtonToggles,
    adapter: buttonTogglesAdapter
  },
  checkboxes: {
    Component: _CheckboxGroup.CheckboxGroup,
    adapter: checkboxGroupAdapter
  },
  date_time_range_input: {
    Component: _DateRange.DateRange,
    adapter: dateRangeAdapter
  },
  day_picker: {
    Component: _DateInput.DateInput,
    adapter: dateInputAdapter
  },
  day_range_picker: {
    Component: _DayRangeInput.DayRangeInput,
    adapter: dayRangeInputAdapter
  },
  dropdown_menu: {
    Component: _DropdownMenu.DropdownMenu,
    adapter: dropdownMenuAdapter
  },
  radio_buttons: {
    Component: _RadioGroup.RadioGroup,
    adapter: radioGroupAdapter
  },
  range_slider: {
    Component: _Slider.RangeSlider,
    adapter: rangeSliderAdapter
  },
  relative_timeframes: {
    Component: _RelativeTimeframes.RelativeTimeframes,
    adapter: relativeTimeframesAdapter
  },
  slider: {
    Component: _Slider.Slider,
    adapter: sliderAdapter
  },
  tag_list: {
    Component: _TagList.TagList,
    adapter: tagListAdapter
  }
};
var TEST_ONLY = {
  getSingleValue: getSingleValue
};
exports.TEST_ONLY = TEST_ONLY;
//# sourceMappingURL=control_filter_utils.js.map