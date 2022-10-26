import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["locale"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useEffect, useState } from 'react';
import { getLocale } from '../../';
import { i18nInit } from '../utils/i18n';
import { i18nResources } from '../locales';
import { Filter } from './Filter';

const Template = _ref => {
  let {
    locale = 'en'
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [expression, setExpression] = useState(args.expression);

  const handleChange = value => {
    var _args$onChange;

    setExpression(value.expression);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, value);
  };

  const [ready, setReady] = useState(false);
  useEffect(() => {
    i18nInit({
      locale,
      resources: i18nResources,
      dateLocale: getLocale(locale)
    }).then(() => {
      setReady(true);
    });
  }, [locale]);
  return ready ? React.createElement(Filter, _extends({}, args, {
    expression: expression,
    onChange: handleChange
  })) : React.createElement("p", null, "Loading...");
};

export const Basic = Template.bind({});
Basic.args = {
  locale: 'en',
  expressionType: 'number',
  expression: '',
  allowMultipleValues: true
};
export const MultiConditionNumber = Template.bind({});
MultiConditionNumber.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  expression: '[0,20],>30'
});
export const MultiConditionDate = Template.bind({});
MultiConditionDate.args = {
  locale: 'en',
  expressionType: 'date',
  expression: 'this week,last week, next week',
  allowMultipleValues: true
};
export const MultiConditionString = Template.bind({});
MultiConditionString.args = {
  expressionType: 'string',
  expression: '%Active%,MV Sport,-Activewear Apparel',
  allowMultipleValues: true
};
export const MultiConditionTier = Template.bind({});
MultiConditionTier.args = {
  expressionType: 'tier',
  expression: "20 to 29,{{ _user_attributes['locale'] }}",
  allowMultipleValues: true
};
export const Config = Template.bind({});
Config.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  config: {
    max: 100,
    min: 0,
    type: 'slider'
  },
  expression: '20'
});
export const RelativeTimeframes = Template.bind({});
RelativeTimeframes.args = {
  locale: 'en',
  config: {
    type: 'relative_timeframes'
  },
  expression: 'Today',
  expressionType: 'date',
  allowMultipleValues: true
};
export default {
  title: 'Filters / Filter',
  component: Filter
};
//# sourceMappingURL=Filter.stories.js.map