import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["isLoading"],
      _excluded2 = ["isLoading"],
      _excluded3 = ["isLoading"],
      _excluded4 = ["isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { addDays, dateToFilterDateTimeModel, filterDateTimeModelToDate } from '@looker/filter-expressions';
import isArray from 'lodash/isArray';
import keyBy from 'lodash/keyBy';
import partition from 'lodash/partition';
import { ButtonToggles } from '../components/ControlFilter/components/ButtonToggles';
import { ButtonGroup } from '../components/ControlFilter/components/ButtonGroup';
import { CheckboxGroup } from '../components/ControlFilter/components/CheckboxGroup';
import { DateInput } from '../components/AdvancedFilter/components/DateFilter/components/DateInput';
import { DateRange } from '../components/AdvancedFilter/components/DateFilter/components/DateRange';
import { DayRangeInput } from '../components/AdvancedFilter/components/DateFilter/components/DayRangeInput';
import { RelativeTimeframes } from '../components/AdvancedFilter/components/DateFilter/components/RelativeTimeframes';
import { filterModelToRelativeTimeframeModel, relativeTimeframeModelToFilterModel } from '../components/AdvancedFilter/components/DateFilter/utils/relative_timeframe_conversions';
import { DropdownMenu } from '../components/ControlFilter/components/DropdownMenu';
import { RadioGroup } from '../components/ControlFilter/components/RadioGroup';
import { RangeSlider, Slider } from '../components/ControlFilter/components/Slider';
import { TagList } from '../components/ControlFilter/components/TagList';
import { createEnumeration, createOptions } from './option_utils';
const filterMaxMap = {
  button_group: 30,
  button_toggles: 30,
  checkboxes: 50,
  radio_buttons: 50
};
export const maxForFilterType = type => filterMaxMap[type];

const getStringOptions = ({
  field,
  suggestions,
  enumerations,
  config
}) => {
  const options = config === null || config === void 0 ? void 0 : config.options;
  const escapeEnumerationVaues = (field === null || field === void 0 ? void 0 : field.has_allowed_values) && (field === null || field === void 0 ? void 0 : field.parameter);
  let stringOptions = [];
  const noOptions = !(isArray(options) && options.length > 0);

  if (noOptions && suggestions && suggestions.length !== 0) {
    stringOptions = createOptions(suggestions);
  } else if (noOptions && enumerations) {
    stringOptions = enumerations.map(createEnumeration(escapeEnumerationVaues));
  } else if (isArray(options)) {
    if (enumerations && enumerations.length > 0) {
      stringOptions = enumerations.map(createEnumeration(escapeEnumerationVaues)).filter(({
        value
      }) => options.includes(value));
    } else {
      stringOptions = createOptions(options);
    }
  }

  return stringOptions;
};

const getPartitionedOptions = (item, optionsMap) => {
  const valueGroups = isArray(item.value) ? partition(item.value.map(String), value => optionsMap[value]) : [[], []];
  return valueGroups;
};

const getMultiStringSelectChange = (item, changeFilter) => value => changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
  value
}));

const buttonGroupAdapter = (item, _ref) => {
  let {
    isLoading
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const stringOptions = getStringOptions(props);
  const optionsMap = keyBy(stringOptions, 'value');
  const [included, excluded] = getPartitionedOptions(item, optionsMap);
  const value = included.length ? included : excluded;
  const changeFilter = props.changeFilter;
  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    max: maxForFilterType('button_group'),
    isLoading
  };
};

const checkboxGroupAdapter = (item, _ref2) => {
  let {
    isLoading
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const adapterProps = buttonGroupAdapter(item, props);
  const {
    onChange,
    value,
    options
  } = adapterProps;
  return {
    onChange,
    value,
    options,
    max: maxForFilterType('checkboxes'),
    isLoading
  };
};

const getSingleValue = (item, stringOptions, onlyValuesFromOptions, fieldCategory) => {
  const optionsMap = keyBy(stringOptions, 'value');
  let singleValue;

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

const getSingleStringSelectChange = (item, changeFilter) => value => {
  changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), {}, {
    value: [value]
  }));
};

const buttonTogglesAdapter = (item, _ref3) => {
  let {
    isLoading
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  const {
    changeFilter,
    field
  } = props;
  const stringOptions = getStringOptions(props);
  const value = getSingleValue(item, stringOptions, true, field === null || field === void 0 ? void 0 : field.category);
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    isLoading
  };
};

const relativeTimeframesAdapter = (item, props) => {
  if (item.type === 'range' && (item.start == null || item.end == null)) {
    return undefined;
  }

  const {
    changeFilter
  } = props;
  const relativeTimeframeValue = filterModelToRelativeTimeframeModel(item);

  if (relativeTimeframeValue === undefined) {
    return undefined;
  }

  const relativeTimeframeOnChange = relativeTimeframe => {
    const newItem = relativeTimeframeModelToFilterModel(relativeTimeframe);
    changeFilter(Number(item.id), _objectSpread(_objectSpread({}, item), newItem));
  };

  return {
    onChange: relativeTimeframeOnChange,
    value: relativeTimeframeValue
  };
};

const dateInputAdapter = (item, props) => {
  if (item.date == null) {
    return undefined;
  }

  const {
    changeFilter
  } = props;
  const dateValue = filterDateTimeModelToDate(item.date);

  const dateChange = date => {
    const dateModel = dateToFilterDateTimeModel(date);
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

const dayRangeInputAdapter = (item, props) => {
  if (item.start == null || item.end == null) {
    return undefined;
  }

  const {
    changeFilter
  } = props;
  const dateRangeValue = {
    from: filterDateTimeModelToDate(item.start),
    to: addDays(filterDateTimeModelToDate(item.end), -1)
  };

  const dateRangeChange = ({
    from,
    to
  }) => {
    const startDateModel = dateToFilterDateTimeModel(from);
    const translatedTo = addDays(to, 1);
    const endDateModel = dateToFilterDateTimeModel(translatedTo);
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

const dateRangeAdapter = (item, props) => {
  if (item.start == null || item.end == null) {
    return undefined;
  }

  const dateTimeRangeValue = _objectSpread(_objectSpread({}, item), {}, {
    id: item.id || '',
    start: item.start,
    end: item.end
  });

  const {
    changeFilter
  } = props;

  const dateTimeRangeChange = (id, item) => {
    const {
      from,
      to
    } = item;
    const startDateModel = dateToFilterDateTimeModel(from);
    const translatedTo = addDays(to, 1);
    const endDateModel = dateToFilterDateTimeModel(translatedTo);
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

const sliderAdapter = (item, props) => {
  var _item$value3;

  if (((_item$value3 = item.value) === null || _item$value3 === void 0 ? void 0 : _item$value3.length) !== 1) {
    return undefined;
  }

  const {
    changeFilter,
    config
  } = props;
  const sliderValue = item.value[0];

  const sliderChange = value => {
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

const rangeSliderAdapter = (item, props) => {
  if (item.low == null || item.high == null) {
    return undefined;
  }

  const {
    changeFilter,
    config
  } = props;
  const rangeSliderValue = {
    min: item.low,
    max: item.high
  };

  const rangeSliderChange = range => {
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

const dropdownMenuAdapter = (item, props) => {
  const {
    changeFilter,
    config,
    field,
    isLoading,
    onInputChange
  } = props;
  const stringOptions = getStringOptions(props);
  const value = getSingleValue(item, stringOptions, false, field === null || field === void 0 ? void 0 : field.category);
  const tokenStyle = (config === null || config === void 0 ? void 0 : config.display) !== 'popover';
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    isLoading,
    onInputChange,
    value,
    options: stringOptions,
    max: maxForFilterType('dropdown_menu'),
    tokenStyle
  };
};

const tagListAdapter = (item, props) => {
  const {
    changeFilter,
    config,
    isLoading,
    onInputChange
  } = props;
  const stringOptions = getStringOptions(props);
  const optionsMap = keyBy(stringOptions, 'value');
  const [included, excluded] = getPartitionedOptions(item, optionsMap);
  const values = [...included, ...excluded];
  const tokenStyle = (config === null || config === void 0 ? void 0 : config.display) !== 'popover';
  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    onInputChange,
    value: values,
    options: stringOptions,
    max: maxForFilterType('tag_list'),
    isLoading,
    tokenStyle
  };
};

const radioGroupAdapter = (item, _ref4) => {
  let {
    isLoading
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  const {
    changeFilter,
    field
  } = props;
  const stringOptions = getStringOptions(props);
  const value = getSingleValue(item, stringOptions, true, field === null || field === void 0 ? void 0 : field.category);
  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    max: maxForFilterType('radio_buttons'),
    isLoading
  };
};

export const getControlFilterInfo = (item, adapterProps) => {
  const {
    Component,
    adapter
  } = filterTokenAdapterMap[adapterProps.config.type] || {
    Component: undefined,
    adapter: undefined
  };
  const props = adapter === null || adapter === void 0 ? void 0 : adapter(item, adapterProps);
  return {
    Component,
    props
  };
};
const filterTokenAdapterMap = {
  button_group: {
    Component: ButtonGroup,
    adapter: buttonGroupAdapter
  },
  button_toggles: {
    Component: ButtonToggles,
    adapter: buttonTogglesAdapter
  },
  checkboxes: {
    Component: CheckboxGroup,
    adapter: checkboxGroupAdapter
  },
  date_time_range_input: {
    Component: DateRange,
    adapter: dateRangeAdapter
  },
  day_picker: {
    Component: DateInput,
    adapter: dateInputAdapter
  },
  day_range_picker: {
    Component: DayRangeInput,
    adapter: dayRangeInputAdapter
  },
  dropdown_menu: {
    Component: DropdownMenu,
    adapter: dropdownMenuAdapter
  },
  radio_buttons: {
    Component: RadioGroup,
    adapter: radioGroupAdapter
  },
  range_slider: {
    Component: RangeSlider,
    adapter: rangeSliderAdapter
  },
  relative_timeframes: {
    Component: RelativeTimeframes,
    adapter: relativeTimeframesAdapter
  },
  slider: {
    Component: Slider,
    adapter: sliderAdapter
  },
  tag_list: {
    Component: TagList,
    adapter: tagListAdapter
  }
};
export const TEST_ONLY = {
  getSingleValue
};
//# sourceMappingURL=control_filter_utils.js.map